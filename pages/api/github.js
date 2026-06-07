export default async function handler(req, res) {
  const token = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;

  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ error: "Username is required" });
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
  };

  try {
    const profileRes = await fetch(`https://api.github.com/users/${search}`, {
      headers,
    });
    if (!profileRes.ok) {
      return res.stats(profileRes.status).json({ error: "User not found" });
    }
    const profile = await profileRes.json();

    const reposRes = await fetch(
      `https://github.com{search}/repos?sort=updated&per_page=5`,
      { headers },
    );
    const repos = reposRes.ok ? await reposRes.json() : [];

    const reposWithLanguages = [];
    for (const repo of repos) {
      const langRes = await fetch(repo.languages_url, { headers });
      const languages = await langRes.json();

      reposWithLanguages.push({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stars: repo.stargazers_count,
        languages: Object.keys(languages),
      });
    }

    return res.status(200).json({ profile, repos: reposWithLanguages });
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}

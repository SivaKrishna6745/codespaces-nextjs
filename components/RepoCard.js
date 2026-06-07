import { useEffect, useState } from "react";

const token = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;

const RepoCard = ({ repos, name }) => {
  console.log('repos', repos);
  // const [reposWithLanguages, setReposWithLanguages] = useState([]);

  // useEffect(() => {
  //   async function fetchLanguages() {
  //     const updatedRepos = [];

  //     for (const repo of repos) {
  //       try {
  //         const response = await fetch(`https://api.github.com/repos/${name}/${repo.name}/languages`, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //             "X-GitHub-Api-Version": "2022-11-28",
  //           },
  //         });
  //         console.log('languages response', response)

  //         if (!response.ok) {
  //           console.warn(`Skipping languages for ${repo.name}: Status ${response.status}`);
  //           updatedRepos.push({ ...repo, languages: [] });
  //           continue;
  //         }

  //         const languagesData = await response.json();
  //         console.log('languagesData', languagesData)
  //         const languages = Object.keys(languagesData);
  //         updatedRepos.push({...repo, languages});
  //       } catch (err) {
  //         console.error(`Error while fetching languages for ${repo.name}, ${err}`);
  //         updatedRepos.push({...repo, languages: []});
  //       }
  //     }

  //     setReposWithLanguages(updatedRepos);
  //   }

  //   if (repos && repos.length > 0) {
  //     fetchLanguages();
  //   }
  // }, [repos, name]);
  // console.log('reposWithLanguages', reposWithLanguages)

  return (
    <div className="columns-3 space-y-4">
      {repos.map((repo) => (
          <p
            key={repo.id}
            className="p-2 border-2 border-gray-400 rounded-sm flex flex-col gap-2 break-inside-avoid"
          >
            <span className="text-lg font-bold">{repo.name}</span>
            {repo.description && (
              <span className="h-0.5 w-full bg-gray-400"></span>
            )}
            <span className="text-sm leading-5 tracking-wide">
              {repo.description}
            </span>
            {repos.languages &&
              repos.languages.map((l, idx) => <p key={idx}>{l}</p>)
            }
          </p>
        ))}
    </div>
  );
};

export default RepoCard;

export const getRepositories = async () => {
    const response = await fetch("/Personal-Homepage/repositories.json");
    if (!response.ok) {
      new Error(response.statusText);
    }
  
    return await response.json();
  };
  
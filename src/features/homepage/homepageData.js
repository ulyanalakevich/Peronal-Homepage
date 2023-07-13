export const getRepositories = async () => {
    const response = await fetch("/personal-homepage/repositories.json");
    if (!response.ok) {
      new Error(response.statusText);
    }
  
    return await response.json();
  };
  
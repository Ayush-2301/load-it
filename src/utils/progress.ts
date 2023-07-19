export const trackPromiseProgress = async (
  promise: Promise<Response>,
  updateCallback: (progress: number) => void
): Promise<Response> => {
  let progress = 0;
  const interval = 100; 

  while (progress < 100) {
    await new Promise((resolve) => setTimeout(resolve, interval)); 
    progress += Math.random() * 10;
    progress = Math.min(progress, 100); 
    updateCallback(progress);
  }

  try {
    const response = await promise;
    if (response.ok) {
      return response;
    } else {
      throw new Error("Request failed with status: " + response.status);
    }
  } catch (error) {
    console.error("Promise error:", error);
    
    updateCallback(99); 
    throw error;
  }
};

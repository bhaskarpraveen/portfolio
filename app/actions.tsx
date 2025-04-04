'use server'

export async function getVisitorCount() {
  const response = await fetch('https://3vpgxsin4m.execute-api.us-east-1.amazonaws.com/prod/get-visitors');
  const data = await response.json();
  return data.body.Count;
}

export async function updateVisitorCount() {
  await fetch('https://3vpgxsin4m.execute-api.us-east-1.amazonaws.com/prod/get-visitors/update');
} 
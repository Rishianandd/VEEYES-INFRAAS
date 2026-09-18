const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export async function submitForm(formData) {
  if (!formspreeEndpoint) {
    throw new Error('Formspree endpoint is not configured.');
  }

  const response = await fetch(formspreeEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  if (!response.ok) {
    throw new Error('Formspree rejected the submission.');
  }
}
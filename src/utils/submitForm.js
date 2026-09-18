const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xwlppkog';

export async function submitForm(formData) {
  const response = await fetch(formspreeEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  if (!response.ok) {
    let errorMessage = 'Formspree rejected the submission.';
    try {
      const result = await response.json();
      if (result.errors?.length) {
        errorMessage = result.errors.map((error) => error.message).join(' ');
      }
    } catch {
      // Keep the generic message when Formspree does not return JSON.
    }
    throw new Error(errorMessage);
  }
}
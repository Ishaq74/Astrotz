// src/scripts/checkout.ts
export async function createCheckoutSession(items: Array<{ title: string; image: { src: string }; price: number; quantity: number }>) {
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }
  
    const data = await response.json();
    return data.url;
  }
  
  export function setupCheckoutButton(button: HTMLElement, product: { title: string; image: { src: string }; price: number }) {
    button.addEventListener("click", async () => {
      const sessionUrl = await createCheckoutSession([{
        title: product.title,
        image: { src: product.image.src },
        price: product.price,
        quantity: 1,
      }]);
      window.location.href = sessionUrl;
    });
  }
  
import Stripe from 'stripe';
const stripe = new Stripe('YOUR_SECRET_KEY', {
  apiVersion: '2020-08-27',
});

// Créer une session de paiement
export async function createCheckoutSession(items: Array<{ title: string; image: { src: string }; price: number; quantity: number }>) {
  const line_items = items.map(item => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: item.title,
        images: [item.image.src],
      },
      unit_amount: item.price * 100, // Montant en centimes
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `${YOUR_SITE_URL}/success`,
    cancel_url: `${YOUR_SITE_URL}/cancel`,
  });

  return session.url; // URL de redirection vers Stripe
}

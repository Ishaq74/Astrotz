import { defineCollection, reference, z } from 'astro:content';

const categories = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    display: z.boolean().optional(),
    parent: z.string().nullable().optional(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      gallery: z.array(z.object({
        src: z.string(),
        alt: z.string(),
      })).optional(),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    featured: z.boolean().optional(),
    featuredorder: z.number().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })).optional(),
    affiliateUrl: z.string().optional(),
    category: reference('categories'), // Référence à la catégorie
  }),
});

const orders = defineCollection({
  type: 'content',
  schema: () => z.object({
    items: z.array(z.object({
      productId: reference('products'), // Référence au produit
      quantity: z.number(),
      price: z.number(),
    })),
    totalAmount: z.number(),
    createdAt: z.string(),
  }),
});

export const collections = { categories, products, orders };

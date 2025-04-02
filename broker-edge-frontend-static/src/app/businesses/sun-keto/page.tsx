import React from 'react';
import  Link from 'next/link';
import BusinessListing from "../../components/BusinessListing";
import businessInterface from "../../types/BusinessInterface";

const businessData : businessInterface = {
    name: "Sun keto",
    price: "$15,000",
    industry: "Online Business",
    subIndustry: "Online Retail",
    sellerFinancing: "Yes (up to 30%)",
    reasonForSelling: "Career Change",
    email:"andrew@sun-keto.com",
    phone: "641 919 5609",
    website: "https://www.amazon.com/s?i=merchant-items&me=A15O3W07UBP22A",
    startDate: "05/20/2020",
    assistanceToBuyer: "A small amount",
    description: "At Sun Keto, we are dedicated to providing high-quality, organic, keto-friendly products that help you stay on track with your low-carb, high-fat lifestyle. Our carefully curated selection of premium, nutrient-dense foods is designed to support your health goals while delivering great taste and convenience.\n" +
        "\n" +
        "Our Products\n" +
        "Organic Grass-Fed Butter Powder – A rich, creamy, and wholesome source of healthy fats, perfect for keto coffee, smoothies, or cooking. Made from real butter, it’s NON-GMO, rBST hormone-free, gluten-free, and sugar-free—an ideal keto fat bomb to fuel your day.\n" +
        "\n" +
        "Organic Pili Nuts – Sustainably sourced, wild sprouted, and packed with healthy fats. These low-carb, sugar-free, and gluten-free nuts are a perfect snack for keto, paleo, and vegan lifestyles.\n" +
        "\n" +
        "Why Choose Sun Keto?\n" +
        "✅ 100% Keto-Friendly & Low Carb\n" +
        "✅ Organic & Premium Ingredients\n" +
        "✅ No Added Sugars, Preservatives, or Fillers\n" +
        "✅ Convenient & Delicious\n" +
        "\n" +
        "Sold exclusively on Amazon, we make it easy to stock up on the best keto-approved products with fast and reliable shipping. Whether you’re blending up a creamy butter coffee or snacking on nutrient-dense Pili nuts, Sun Keto is here to fuel your journey to better health.\n" +
        "\n" +
        "🌞 Sun Keto – Pure, Healthy, and Keto-Approved.",
}

export default function Home() {

  return (
      <>
        <BusinessListing BusinessData={businessData}/>
      </>

  );
}

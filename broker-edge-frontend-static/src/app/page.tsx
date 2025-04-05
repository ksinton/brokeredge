import React from 'react';
import  Link from 'next/link';
import Listings from "./components/Listings";
import listingInterface from "./types/ListingInterface";


export default function Home() {

    const listingsData: listingInterface[] = [
        {
            title: "Sun Keto",
            description: "At Sun Keto, we are dedicated to providing high-quality, organic, keto-friendly products that help you stay on track with your low-carb, high-fat lifestyle. Our carefully curated selection of premium, nutrient-dense foods is designed to support your health goals while delivering great taste and convenience.",
            price: 350000,
            link:"sun-keto",
        },
        {
            title: "Downtown Bookstore",
            description: `
      A charming bookstore nestled in the heart of downtown Fairfield, offering an extensive selection of new and used books.
      This bookstore has served the community for over a decade and is a hub for local literary enthusiasts. We host weekly events, including book readings, author signings, and workshops, fostering a vibrant and loyal customer base.
      The store includes a welcoming seating area, perfect for readers to browse and relax, and a small café offering coffee and pastries.

      The location is unbeatable, situated in a high-traffic area surrounded by complementary businesses. 
      With strong community ties, this business is positioned for continued success. The sale includes all inventory, fixtures, and established vendor relationships.
      There is significant potential to grow through e-commerce, online sales, and expanded event offerings.
    `,
            price: 275000,
        },
        {
            title: "Main Street Coffee Shop",
            description: `
      A trendy coffee shop with a modern aesthetic and excellent foot traffic, renowned for high-quality brews and fresh pastries.
      This well-loved establishment attracts a diverse clientele, from professionals grabbing a morning coffee to students seeking a quiet study spot.
      The coffee shop features a state-of-the-art espresso machine, cozy seating, and outdoor patio space, making it a favorite destination year-round.

      Our menu includes an array of gourmet coffee beverages, teas, and light breakfast and lunch options made with locally sourced ingredients.
      The location is prime, situated on Fairfield's bustling Main Street, drawing a steady stream of visitors and locals alike. 
      With a strong social media presence and glowing reviews, this business has a stellar reputation. Opportunities to grow include expanding hours, introducing evening entertainment, or creating a loyalty program.
    `,
            price: 450000,
        },
        {
            title: "Historic Bed & Breakfast",
            description: `
      This beautifully restored historic property offers an incredible investment opportunity in Fairfield. The bed & breakfast boasts 10 elegantly furnished rooms, a charming dining area, and picturesque outdoor spaces for events and gatherings.
      Each room is tastefully decorated, combining modern amenities with timeless charm, ensuring an unforgettable guest experience.

      The property has become a sought-after destination for travelers, with a steady stream of bookings throughout the year. 
      The business also caters to weddings, retreats, and other special events, providing significant additional revenue streams. 
      Located near local attractions and cultural hotspots, the bed & breakfast is perfectly positioned for continued success. 
      This sale includes all furnishings, fixtures, and a well-trained staff ready to support the new owner. Potential growth opportunities include expanding marketing efforts or adding spa services.
    `,
            price: 1200000,
        },
        {
            title: "Fairfield Fitness Center",
            description: `
      A fully equipped fitness center catering to the health and wellness needs of the Fairfield community. 
      This gym features state-of-the-art equipment, spacious workout areas, group fitness studios, and personal training services. 
      The membership base is strong and loyal, with many members who have been with us for years.

      The facility also offers specialized classes, such as yoga, pilates, and high-intensity interval training, led by certified and experienced instructors. 
      Located in a high-visibility area, the gym benefits from excellent accessibility and ample parking. 
      There is significant potential to grow through corporate wellness programs, additional membership tiers, and online fitness offerings.
    `,
            price: 950000,
        },
        {
            title: "Town Hardware Store",
            description: `
      A long-standing hardware store with an excellent local reputation, offering a wide range of tools, supplies, and home improvement products. 
      Serving both homeowners and contractors, this store has become a trusted name in the Fairfield community.

      The store features well-organized aisles, a knowledgeable team of employees, and a loyal customer base. 
      The location offers ample parking and is situated in a high-traffic area, ensuring continued visibility. 
      Included in the sale are inventory, fixtures, and vendor relationships. This is a great opportunity for someone with a passion for retail or home improvement.
    `,
            price: 800000,
        },
        {
            title: "Organic Grocery Store",
            description: `
      A specialty grocery store focused on organic, locally sourced products, catering to the growing demand for healthy, sustainable food options.
      This store is a favorite among health-conscious shoppers and those interested in sustainable living. It offers a variety of organic produce, dairy, grains, snacks, and environmentally friendly household products.

      The store has a loyal customer base, and its prime location near schools and residential areas guarantees consistent foot traffic. 
      The business is fully equipped with shelving, refrigeration, and point-of-sale systems. 
      Opportunities for growth include expanding the product range, offering online ordering and delivery, or partnering with local farms and producers for exclusive products.
    `,
            price: 600000,
        },
        {
            title: "Fairfield Auto Repair",
            description: `
      A trusted auto repair shop with a loyal customer base, located on a busy road with high visibility. 
      This fully equipped shop provides a wide range of services, from basic maintenance to more complex repairs, and is well-known for its exceptional customer service and high-quality work.

      The shop includes state-of-the-art diagnostic equipment, a spacious service area, and a comfortable waiting room for customers. 
      With a strong reputation in the community, this business has a steady stream of repeat customers and a significant opportunity to expand its service offerings, such as offering fleet services or expanding into automotive parts sales.
    `,
            price: 725000,
        },
        {
            title: "Downtown Clothing Boutique",
            description: `
      A fashionable boutique offering curated apparel and accessories, catering to local and regional customers. 
      This boutique has become a go-to destination for trendsetters seeking unique and high-quality fashion items. The shop features a carefully selected range of clothing, shoes, and accessories, with a focus on timeless pieces that fit a variety of styles.

      The business thrives due to its prime location in downtown Fairfield, where foot traffic is abundant. The boutique has a strong social media presence, attracting shoppers who appreciate the personal service and exclusive product lines. 
      There is potential to increase sales through e-commerce, pop-up events, and expanding the product line to include more accessories or exclusive collaborations.
    `,
            price: 500000,
        },
        {
            title: "Local Ice Cream Parlor",
            description: `
      A beloved ice cream shop serving handmade treats, located near a popular park in Fairfield. 
      Known for its fun and colorful atmosphere, this parlor offers a wide variety of flavors, including vegan and gluten-free options, catering to the entire family.

      The shop features an inviting layout with a long counter, comfortable seating, and an outdoor patio area where guests can enjoy their ice cream on warm days. 
      The business has a loyal following, and with its prime location, it benefits from high foot traffic during the warmer months. 
      This is an ideal business for an owner who loves working with the public and enjoys creating a fun atmosphere for families and children.
    `,
            price: 300000,
        },
        {
            title: "Fairfield Craft Brewery",
            description: `
      A local brewery known for its award-winning beers and vibrant taproom, with opportunities for distribution expansion. 
      The brewery offers a unique selection of craft beers, from seasonal brews to year-round favorites, attracting craft beer enthusiasts from all over the region.

      The taproom provides a lively atmosphere for customers to sample and purchase beer, and the brewery also offers tours, events, and a small food menu. 
      With a growing customer base and a well-established reputation, the business has great potential for further growth through distribution partnerships and expansion into new markets.
    `,
            price: 2300000,
        },
        {
            title: "Pet Supply Store",
            description: `
      A pet supply store with a variety of products and grooming services, catering to the growing pet owner community in Fairfield. 
      The store offers everything from pet food and toys to grooming tools, accessories, and more. It has established itself as a reliable source for pet owners who want high-quality products for their furry friends.

      The business includes a fully equipped grooming station, an inventory of popular pet products, and a knowledgeable team dedicated to providing excellent customer service. 
      The store also offers pet training classes and adoption events in partnership with local animal shelters. 
      With pet ownership on the rise, this is a great business with significant growth potential.
    `,
            price: 400000,
        },
        {
            title: "Community Garden Center",
            description: `
      A thriving garden center offering plants, tools, and workshops for gardening enthusiasts in Fairfield. 
      The business has a diverse range of plants, from flowers and shrubs to vegetables and herbs, and it also offers expert advice and gardening tips to customers.

      The center also hosts workshops and educational events, which have become a popular part of the community's gardening culture. 
      Located in a scenic area with a strong local following, this is a business with significant potential for growth, including the possibility of expanding its product range, offering online sales, or partnering with local schools for educational programs.
    `,
            price: 520000,
        },
        {
            title: "Farm-to-Table Restaurant",
            description: `
      A high-end restaurant specializing in farm-to-table cuisine, with a focus on locally sourced ingredients and sustainability. 
      This fine dining establishment has earned a reputation for its seasonal menus, exceptional service, and commitment to environmental responsibility.

      The restaurant features a sophisticated dining area, an open kitchen, and an outdoor patio. 
      With a loyal clientele, the business has a strong customer base that values sustainability and high-quality dining experiences. 
      The restaurant also offers catering services, private dining options, and food delivery for local customers. This business has significant potential for expansion through increased marketing efforts and partnerships with local farms.
    `,
            price: 1600000,
        },
        {
            title: "Event Planning Business",
            description: `
      A profitable event planning company specializing in weddings, corporate events, and community gatherings. 
      This business has been serving clients for several years and has developed strong relationships with vendors, venues, and other service providers.

      The company offers end-to-end event planning services, from initial consultations to the execution of events, ensuring each occasion is memorable and runs smoothly. 
      The business has a portfolio of successful events and a growing client base. There is great potential to expand by increasing marketing efforts, targeting new markets, or offering new event types such as virtual events or hybrid meetings.
    `,
            price: 700000,
        },
        {
            title: "Outdoor Adventure Store",
            description: `
      A store catering to outdoor enthusiasts, offering gear, apparel, and guided adventure services.
      This business has become a local favorite for individuals seeking to explore the great outdoors, offering everything from camping gear to hiking apparel.

      The store also provides guided outdoor adventures, including hiking, kayaking, and rock climbing. With a passionate and growing customer base, the business has significant growth potential through partnerships with outdoor organizations, corporate wellness programs, and further online retail development.
    `,
            price: 850000,
        },
        {
            title: "Fairfield Printing Services",
            description: `
      A printing business serving individuals and local businesses with marketing materials, signage, and more. 
      The company has a reputation for producing high-quality prints on time and on budget.

      The business serves a wide range of customers, from small businesses needing flyers and brochures to larger clients requiring custom signage and promotional products. 
      There is a growing demand for eco-friendly printing solutions, and the business could expand by introducing sustainable practices and products. This is a turnkey opportunity with established clients and vendor relationships.
    `,
            price: 300000,
        },
        {
            title: "Yoga & Wellness Studio",
            description: `
      A popular yoga studio with a strong membership base, offering classes, workshops, and wellness programs. 
      The studio features a range of yoga styles, from vinyasa to restorative, as well as wellness services such as massage and meditation.

      The studio is located in a tranquil area, creating an ideal environment for relaxation and rejuvenation. It has a loyal client base, including individuals and families seeking a holistic approach to wellness. 
      There is great potential to grow by adding additional classes, workshops, or expanding into wellness products.
    `,
            price: 450000,
        },
        {
            title: "Downtown Art Gallery",
            description: `
      An art gallery showcasing local and regional artists, with regular exhibits and strong community support. 
      This gallery has become a cultural hub, offering a platform for emerging artists to display their work and attract a wide audience.

      The gallery has hosted numerous art shows, receptions, and educational events, fostering a vibrant arts community. The business has a loyal following and is well-regarded for its curation of unique and thought-provoking art. 
      There are opportunities to expand into art sales, online auctions, or collaborative art projects with local businesses.
    `,
            price: 250000,
        },
        {
            title: "Fairfield Mini Golf & Arcade",
            description: `
      A family-friendly entertainment center featuring mini-golf, arcade games, and a snack bar.
      This popular attraction draws families, groups, and tourists, offering hours of fun with well-maintained mini-golf courses and a variety of exciting arcade games.

      The location also features a snack bar with a range of food and beverages, making it a great spot for parties and gatherings. 
      With its prime location and family-friendly offerings, the business enjoys a steady stream of visitors year-round. 
      Expanding the arcade selection, hosting events, or offering party packages would help maximize revenue and further cement its place in the community.
    `,
            price: 1100000,
        }
    ];

  return (
      <>
          <div className="bg-gradient-to-t from-mobile-header-dark-background to-mobile-header-background md:bg-[url('/buy-a-business-in-fairfield-iowa.jpg')] mx-0 md:mx-4 flex h-[46px] md:h-[58px] bg-left-bottom">

              <div className="space-y-2 md:space-y-4 px-5 mt-3 relative w-full max-w-[430px] md:max-w-none">
                  <h1 className="block text-m md:text-[20px]">Buy a Local Business</h1>

                  <div className="flex space-x-4 text-forground-form-field">

                  </div>

                  <Link href="/sell-your-business">
                      <button role="button"
                              className="bg-transparent border-[1px] border-white border-solid px-3 md:px-6 py-1 rounded-lg absolute top-0 top-[calc(50%-9px)] md:top-[calc(50%-18px)] left-auto md:right-[30px] right-[21px] -translate-y-[22px] md:-translate-y-1/2 md:text-lg whitespace-nowrap">
                          Sell Your Business
                      </button>
                  </Link>

              </div>
          </div>

          <Listings initialData={listingsData}/>
      </>

  );
}

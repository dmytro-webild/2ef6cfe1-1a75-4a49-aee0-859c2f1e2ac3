"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Building, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSizeMediumTitles"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "Reviews",
          id: "#testimonials",
        },
        {
          name: "FAQs",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Beas View Pool Bara"
      button={{
        text: "Book Now",
        href: "#contact",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Your Perfect Summer Escape"
      description="Swim. Relax. Enjoy the River View. Where Summer Feels Better."
      buttons={[
        {
          text: "Book Your Stay",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "carousel-1",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-daughter-resting-with-her-father-hammock_23-2147624087.jpg",
          imageAlt: "Drone shot of river and pool at sunset",
        },
        {
          id: "carousel-2",
          imageSrc: "http://img.b2bpic.net/free-photo/family-hanging-out-jetty_23-2150767948.jpg",
          imageAlt: "Aerial view of swimming pool with river background",
        },
        {
          id: "carousel-3",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-reading-sunset_23-2149726468.jpg",
          imageAlt: "Riverside pool at golden hour with calm water",
        },
        {
          id: "carousel-4",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-friends-pier-lake-while-enjoying-day-doing-selfie_146671-19027.jpg",
          imageAlt: "Kids and families enjoying the pool from a drone perspective",
        },
        {
          id: "carousel-5",
          imageSrc: "http://img.b2bpic.net/free-photo/silhouette-palm-tree-beach-with-swimming-pool_74190-3892.jpg",
          imageAlt: "Sun reflection on the water surface of the pool",
        },
        {
          id: "carousel-6",
          imageSrc: "http://img.b2bpic.net/free-photo/city-park-with-lake_1127-3977.jpg",
          imageAlt: "Panoramic view of the resort pool complex with river",
        },
      ]}
      autoPlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Your Hidden Riverside Getaway"
      description="Discover Beas View Pool Bara, your secret summer sanctuary. Experience a relaxed family atmosphere, affordable luxury, and a calm, uncrowded environment. Perfect for kids and groups, our natural riverside scenery promises an unforgettable escape."
      imageSrc="http://img.b2bpic.net/free-photo/sitting-white-bench-watching-water_181624-22270.jpg"
      imageAlt="Family enjoying by the riverside pool"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          tag: "Kids' Fun",
          title: "Floating Gear for Children",
          subtitle: "Safe & Exciting Play",
          description: "Ensure endless smiles with our range of floating gear, keeping your little ones safe and entertained in the water.",
          imageSrc: "http://img.b2bpic.net/free-photo/boy-swimming-pool-with-pool-float_23-2149025455.jpg",
          imageAlt: "Kids with floating gear in the pool",
        },
        {
          tag: "Family Comfort",
          title: "Spacious Family Seating",
          subtitle: "Relax Together",
          description: "Find your perfect spot in our comfortable family seating areas, designed for groups to relax and connect by the pool.",
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool-with-umbrella-chair-lounge-around-there-leisure-travel_74190-7875.jpg",
          imageAlt: "Comfortable family seating area poolside",
        },
        {
          tag: "Nature Views",
          title: "River-View Chill Spots",
          subtitle: "Peaceful Retreats",
          description: "Unwind in our exclusive chill spots, offering breathtaking river views and a tranquil ambiance to escape the everyday.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-with-headphones-outdoors_23-2149000867.jpg",
          imageAlt: "Serene river-view chill spots with hammocks",
        },
        {
          tag: "Planning Your Visit",
          title: "Convenient Summer Timings",
          subtitle: "Your Perfect Day",
          description: "Our extended summer operating hours ensure you have ample time to swim, relax, and create lasting memories.",
          imageSrc: "http://img.b2bpic.net/free-photo/alarm-clock-black-friday-frame_23-2148285057.jpg",
          imageAlt: "Display showing open summer timings",
        },
      ]}
      title="Unforgettable Experiences for Everyone"
      description="From thrilling water fun to serene relaxation, we offer amenities designed for ultimate comfort and enjoyment."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "entry-day-pass",
          badge: "Popular",
          badgeIcon: Sparkles,
          price: "₹499",
          subtitle: "Per Person (Full Day)",
          features: [
            "Access to Main Pool",
            "River View Lounge Access",
            "Kids' Play Area",
            "Restroom Facilities",
          ],
        },
        {
          id: "family-bundle",
          badge: "Best Value",
          badgeIcon: Users,
          price: "₹1799",
          subtitle: "Family of 4 (Full Day)",
          features: [
            "All Day Pass Inclusions",
            "Private Family Seating (Subject to availability)",
            "Complimentary Floating Gear Access",
            "Discount on Food & Beverages",
          ],
        },
        {
          id: "group-package",
          badge: "Great for Groups",
          badgeIcon: Building,
          price: "₹3999",
          subtitle: "Group of 10 (Full Day)",
          features: [
            "All Family Bundle Inclusions",
            "Dedicated Group Zone",
            "Event Planning Assistance",
            "Exclusive River Access Point",
          ],
        },
      ]}
      title="Affordable Luxury for Your Perfect Day"
      description="Choose the ideal entry package for your unforgettable summer experience. Great for families and groups seeking value."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Priya Sharma",
          date: "July 2023",
          title: "Perfect Family Day Out!",
          quote: "Beas View Pool Bara is truly a hidden gem. My kids absolutely loved the floating gear, and the riverside chill spots were so relaxing. It's affordable luxury at its best!",
          tag: "Family Fun",
          avatarSrc: "http://img.b2bpic.net/free-photo/stylish-woman-wearing-yellow-bandana_273609-13339.jpg",
          avatarAlt: "Priya Sharma",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-young-women-laughing_23-2148226222.jpg",
          imageAlt: "Family enjoying pool at sunset",
        },
        {
          id: "2",
          name: "Amit Kumar",
          date: "August 2023",
          title: "Unforgettable Summer Experience",
          quote: "The relaxed atmosphere and stunning river views made our visit unforgettable. The staff were incredibly friendly, and it truly felt like a premium escape without the hefty price tag. Highly recommend!",
          tag: "Relaxation",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg",
          avatarAlt: "Amit Kumar",
          imageSrc: "http://img.b2bpic.net/free-photo/dad-holding-his-happy-daughter-his-hands-pool_1268-23280.jpg",
          imageAlt: "Parents playing with child in pool",
        },
        {
          id: "3",
          name: "Radhika Singh",
          date: "June 2023",
          title: "My New Favorite Getaway Spot",
          quote: "Such a calm and uncrowded environment, which is hard to find! The aqua blue water and sunset highlights were cinematic. Definitely coming back with friends and family.",
          tag: "Scenic Beauty",
          avatarSrc: "http://img.b2bpic.net/free-photo/adorable-lovely-woman-fashion-clothes-is-sitting-open-air-cafe-is-using-smartphone-waiting-friends-city-lights-background_291650-842.jpg",
          avatarAlt: "Radhika Singh",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-stylish-woman-professional-model-classic-hat-black-body-suit_343596-1787.jpg",
          imageAlt: "Couple relaxing on sun loungers",
        },
        {
          id: "4",
          name: "Vikram Patel",
          date: "September 2023",
          title: "Luxury Feel on a Budget!",
          quote: "I was amazed by how expensive the place felt while being so affordable. The floating UI and water ripple effects added a really cool, modern touch. Instantly wanted to visit after seeing the homepage!",
          tag: "Great Value",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-man-enjoying-cup-coffee_23-2149130682.jpg",
          avatarAlt: "Vikram Patel",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-friends-seaside_23-2149031233.jpg",
          imageAlt: "Group of friends swimming pool",
        },
        {
          id: "5",
          name: "Ananya Gupta",
          date: "October 2023",
          title: "Perfect for Groups and Kids",
          quote: "Visited with a large group and several children, and everyone had an amazing time. The facilities are top-notch, and the river view is just breathtaking. A truly enjoyable experience.",
          tag: "Group Friendly",
          avatarSrc: "http://img.b2bpic.net/free-photo/positive-successful-businesswoman-posing-with-arms-folded-co-working-coffee-shop-interior-looking-camera-smiling_74855-10345.jpg",
          avatarAlt: "Ananya Gupta",
          imageSrc: "http://img.b2bpic.net/free-photo/family-with-two-kids-enjoying-their-day-swimming-pool_23-2149025479.jpg",
          imageAlt: "Kids enjoying water slide",
        },
      ]}
      title="Hear From Our Happy Guests"
      description="Our visitors consistently rate us 4.9 Stars across 18+ reviews! See why families and groups love their time at Beas View Pool Bara."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Google Reviews (4.9 Stars)",
        "TripAdvisor",
        "Family Fun Magazine",
        "Adventure Seekers",
        "Local Guides Picks",
        "Happy Families",
        "Summer Escapes",
      ]}
      title="Trusted by Happy Families"
      description="Our commitment to a premium experience shines through in every glowing review."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "What are your open summer timings?",
          content: "We are open daily from 9:00 AM to 7:00 PM throughout the summer season (April to October). Please check our website or social media for any seasonal updates.",
        },
        {
          id: "faq-2",
          title: "Do you provide floating gear for children?",
          content: "Yes, we offer complimentary floating gear for children of all ages to ensure their safety and enjoyment in the pool. It's included with all entry passes.",
        },
        {
          id: "faq-3",
          title: "Are there dedicated family seating areas?",
          content: "Absolutely! We have spacious and comfortable family seating areas available around the pool and by the riverside. Priority for private seating is given to family bundle package holders.",
        },
        {
          id: "faq-4",
          title: "Can we bring our own food and drinks?",
          content: "Outside food and beverages are not permitted. We have an on-site cafe and snack bar offering a variety of delicious options to enhance your experience.",
        },
        {
          id: "faq-5",
          title: "Is there a lifeguard on duty?",
          content: "Yes, certified lifeguards are on duty at all times during operating hours to ensure the safety of all our guests in and around the pool area.",
        },
      ]}
      title="Your Questions, Answered"
      description="Find quick answers to common questions about your visit to Beas View Pool Bara."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Connect With Us"
      title="Ready to Dive In?"
      description="Plan your perfect summer escape. Get in touch with us for bookings, inquiries, or any special requests. We're here to help!"
      inputPlaceholder="Enter your message (optional)"
      buttonText="Send WhatsApp Message"
      termsText="By clicking, you agree to our Privacy Policy and Terms of Service."
      onSubmit={(email) => console.log(email)}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=2p5ng4"
      logoText="Beas View Pool Bara"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

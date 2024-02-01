import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { blogcards } from "../components/content/data";
import BlogCards from "../components/shared/blogCards";
import BlogBanner from "./blogBanner";
import ScrollToTop from "../components/shared/scrollToTop";

const Blogs = () => {
  ScrollToTop();

  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    setData(blogData);
    setTotalPages(Math.ceil(blogData.length / itemsPerPage));
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  console.log("asd", subset);
  return (
    <div>
      <BlogBanner />
      <div className="blogs d-flex v-center h-center flex-column">
        <div className="S-wrapper my-5">
          <div className="stories-wrapper">
            <BlogCards blogData={subset} blogPerPage={2} />
          </div>
        </div>
        <ReactPaginate
          pageCount={totalPages}
          onPageChange={handlePageChange}
          forcePage={currentPage}
          pageRangeDisplayed={2}
          className="light-grey-shadow pagination-react"
        />
      </div>
    </div>
  );
};

const blogData = [
  {
    id: "1",
    thumbnail: blogcards.blog1,
    heading: "The Benefits of Investing in Paid..",
    discription:
      "As a business owner or marketer, you may wonder if paid advertising is worth the investment.",
    link: "/blog-1",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },

  {
    id: "2",
    thumbnail: blogcards.blog2,
    heading: "How to Create Compelling Marketing..",
    discription:
      "In today’s competitive world, creating compelling marketing copy is essential to attract and...",
    link: "/blog-2",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },

  {
    id: "3",
    thumbnail: blogcards.blog3,
    heading: "The Importance of Mobile Marketing..",
    discription:
      "As a business owner or marketer, you may wonder if paid advertising is worth the investment.",
    link: "/blog-3",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },

  {
    id: "4",
    thumbnail: blogcards.blog4,
    heading: "How to Use Social Media to Boost Your..",
    discription:
      "As a business owner or marketer, you may wonder if paid advertising is worth the investment.",
    link: "/blog-4",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "5",
    thumbnail: blogcards.blog5,
    heading: "The Role of Artificial Intelligence in..",
    discription:
      "As a business owner or marketer, you may wonder if paid advertising is worth the investment.",
    link: "/blog-5",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "6",
    thumbnail: blogcards.blog6,
    heading: "The Power of Personalization in..",
    discription:
      "As a business owner or marketer, you may wonder if paid advertising is worth the investment.",
    link: "/blog-6",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },

  {
    id: "7",
    thumbnail: blogcards.blog7,
    heading: "The Benefits of Using Customer Data in ..",
    discription:
      "In today’s digital age, businesses have access to more customer data than ever before..",
    link: "/blog-7",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },

  {
    id: "8",
    thumbnail: blogcards.blog8,
    heading: "How to Build a Strong Online Presence ..",
    discription:
      "In today’s digital age, having a strong online presence is critical for the success of any..",
    link: "/blog-8",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "9",
    thumbnail: blogcards.blog9,
    heading: "The Impact of Influencer Marketing on  ..",
    discription:
      "Influencer marketing has become a popular trend in the digital marketing world, and for a..",
    link: "/blog-9",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "10",
    thumbnail: blogcards.blog10,
    heading: "Why Video Marketing is the Future",
    discription:
      "In recent years, video marketing has become one of the most powerful tools for businesses to connect with their target audience..",
    link: "/blog-10",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "11",
    thumbnail: blogcards.blog11,
    heading: "The Psychology of Consumer Behavior..",
    discription:
      "As marketers, understanding the psychology of consumer behavior is essential to developing effective marketing strategies.. ",
    link: "/blog-11",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "12",
    thumbnail: blogcards.blog12,
    heading: "The Art of Storytelling in Marketing",
    discription:
      "In today’s digital world, consumers are constantly bombarded with marketing messages..",
    link: "/blog-12",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "13",
    thumbnail: blogcards.blog13,
    heading: "How to Measure the Success of ..",
    discription:
      "Marketing campaigns are a crucial part of any business’s growth strategy..",
    link: "/blog-13",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "14",
    thumbnail: blogcards.blog14,
    heading: "The Importance of Branding in Marketing",
    discription:
      "Branding is an essential part of any successful marketing strategy..",
    link: "/blog-14",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "15",
    thumbnail: blogcards.blog15,
    heading: "The Role of SEO in Digital Marketing",
    discription:
      "In today’s digital age, having a strong online presence is crucial for businesses of all sizes..",
    link: "/blog-15",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "16",
    thumbnail: blogcards.blog16,
    heading: "The Dos and Don’ts of Content Marketing",
    discription:
      "Content marketing has become a popular way for businesses to engage with their target audience and promote their brand..",
    link: "/blog-16",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "17",
    thumbnail: blogcards.blog17,
    heading: "The Benefits of Email Marketing for Your..",
    discription:
      "Email marketing is one of the most effective and cost-efficient ways for businesses to reach their target audience and promote..",
    link: "/blog-17",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "18",
    thumbnail: blogcards.blog18,
    heading: "The Power of Social Media Marketing",
    discription:
      "Social media has become a powerful tool for businesses of all sizes to reach their target audience and promote their brand..",
    link: "/blog-18",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "19",
    thumbnail: blogcards.blog19,
    heading: "How to Create a Winning Marketing Strategy",
    discription:
      "Creating a winning marketing strategy can be a daunting task, but with the right approach..",
    link: "/blog-19",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "20",
    thumbnail: blogcards.blog20,
    heading: "The Future of Marketing: Trends to Watch..",
    discription:
      "A picture is worth a thousand words. A good logo goes a long way in drawing potential..",
    link: "/blog-20",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "21",
    thumbnail: blogcards.blog21,
    heading: "TOP TRENDS IN DIGITAL MARKETING THAT WILL SAVE YOUR BUSINESS",
    discription:
      "In the current times when the world has been completely devoured by the Covid-19..",
    link: "/blog-21",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "22",
    thumbnail: blogcards.blog22,
    heading: "TOP QUALITIES OF THE BEST DIGITAL MARKETING AGENCIES",
    discription:
      "Let’s find out how a digital marketing agency works? If you are a busy businessman..",
    link: "/blog-22",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "23",
    thumbnail: blogcards.blog23,
    heading:
      "TOP HIGHLY RECOMMENDED TIPS FOR WHAT TO POST ON SOCIAL MEDIA DURING..",
    discription:
      "Keeping in mind how things are looking at the moment, it seems as if the coronavirus is not..",
    link: "/blog-23",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "24",
    thumbnail: blogcards.blog24,
    heading: "TOP 10 MOST COMMON DIGITAL MARKETING MISTAKES",
    discription:
      "Digital marketing is constantly evolving, and we keep finding ourselves trying out new..",
    link: "/blog-24",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "25",
    thumbnail: blogcards.blog25,
    heading: "THE TOP DIGITAL MARKETING MYTHS OF 2021",
    discription:
      "You must have heard these top digital marketing myths in 2021 while going to get..",
    link: "/blog-25",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "26",
    thumbnail: blogcards.blog26,
    heading: "MARKETING CHECKLIST POST-COVID 19 QUARANTINE",
    discription:
      "The coronavirus has made businesses all over the globe succumb to marketing strategies..",
    link: "/blog-26",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "27",
    thumbnail: blogcards.blog27,
    heading: "HOW TO CHOOSE A DIGITAL MARKETING AGENCY?",
    discription:
      "Digital marketing is constantly evolving, and we keep finding ourselves trying out..",
    link: "/blog-27",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "28",
    thumbnail: blogcards.blog28,
    heading:
      "11 TIPS TO HELP YOU CHOOSE THE BEST SOCIAL MEDIA MARKETING AGENCY",
    discription:
      "Social media might have been made for loved ones and friends to stay in touch..",
    link: "/blog-28",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "29",
    thumbnail: blogcards.blog29,
    heading: "5 BEST SOCIAL MEDIA PLATFORMS FOR BUSINESS IN 2021",
    discription:
      "When in Business marketing, you need to be above average to stay in the game as there..",
    link: "/blog-29",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "30",
    thumbnail: blogcards.blog30,
    heading: "HOW TO SUCCESSFULLY STRENGTHEN YOUR SMS MARKETING STRATEGY?",
    discription:
      "In an era where technology is rising to its extent each minute, it does not seem like a..",
    link: "/blog-30",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "31",
    thumbnail: blogcards.blog31,
    heading: "BEST DATA COLLECTION SERVICES",
    discription:
      "Access to information is always available, but collecting it requires patience and hard work..",
    link: "/blog-31",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "32",
    thumbnail: blogcards.blog32,
    heading: "PROFESSIONAL­ SEO­ SERVICES­..",
    discription:
      "If you have researched how to increase traffic to your website, you have probably seen..",
    link: "/blog-32",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "33",
    thumbnail: blogcards.blog33,
    heading: "WEBSITE DEVELOPMENT SERVICES",
    discription:
      "Web development basically involves the construction of your website or a page of..",
    link: "/blog-33",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "34",
    thumbnail: blogcards.blog34,
    heading: "WHY IS EMAIL MARKETING IMPORTANT?",
    discription:
      "In these desperate times for the coronavirus, businesses all over the world have done their..",
    link: "/blog-34",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "35",
    thumbnail: blogcards.blog35,
    heading: "SOCIAL ENGINE MARKETING | BEST SEO..",
    discription:
      "In order to increase the interest of your customers in your brand, you need to have..",
    link: "/blog-35",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "36",
    thumbnail: blogcards.blog36,
    heading: "HOW TO DESIGN A SUCCESSFUL WEBSITE..",
    discription:
      "In this world of the internet, your website is the profile of your business online...",
    link: "/blog-36",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "37",
    thumbnail: blogcards.blog37,
    heading: "WHY SOCIAL MEDIA MANAGEMENT IS..",
    discription:
      "Digital marketing has reached a completely different level with every coming new...",
    link: "/blog-37",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "38",
    thumbnail: blogcards.blog38,
    heading: "CHOOSING A BLOG SERVICE",
    discription:
      "Let us suppose you have a business, and you see other people out there blogging within...",
    link: "/blog-38",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
  {
    id: "39",
    thumbnail: blogcards.blog39,
    heading: "WHY YOU SHOULD HIRE..",
    discription:
      "If you are someone who has come to a point where you feel that your brand and its image..",
    link: "/blog-39",
    date: "April 26, 2023",
    writer: "Pulse Marketing",
  },
];
export default Blogs;

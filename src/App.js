import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./page/home";
import About from "./page/about";
import OurServices from "./page/ourservices";
import Portfolio from "./page/portfolio";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import ContentCreator from "./page/contentCreator";
import Webdevelopment from "./page/webdevelopment";
import LogoDesign from "./page/logoDesign";
import ContactUs from "./page/contactUs";
import AppDevelopment from "./page/appDevelopment";
import Orm from "./page/orm";
import Seo from "./page/seo";
import Faq from "./page/faq";
import BookConsultatnt from "./components/Book/bookConsultatnt";
import CrmHome from "./page/crmHome";
import Payment from "./components/checkOut/payment";
import Boarding from "./page/boarding";
import Join from "./page/join";
import Thankyou from "./page/thankyou";
import Pricing from "./components/crmHome/pricing";
import Privacy from "./page/privacy";
import Terms from "./page/terms";
import Audit from "./page/audit";
import Blogs from "./page/blogs";
import BlogPages from "./page/blogPages";
import Blog1 from "./page/blogs/blog1";
import Blog2 from "./page/blogs/blog2";
import Blog3 from "./page/blogs/blog3";
import Blog4 from "./page/blogs/blog4";
import Blog5 from "./page/blogs/blog5";
import Blog6 from "./page/blogs/blog6";
import Blog7 from "./page/blogs/blog7";
import Blog8 from "./page/blogs/blog8";
import Blog9 from "./page/blogs/blog9";
import Blog10 from "./page/blogs/blog10";
import Blog11 from "./page/blogs/blog11";
import Blog12 from "./page/blogs/blog12";
import Blog13 from "./page/blogs/blog13";
import Blog14 from "./page/blogs/blog14";
import Blog15 from "./page/blogs/blog15";
import Blog16 from "./page/blogs/blog16";
import Blog17 from "./page/blogs/blog17";
import Blog18 from "./page/blogs/blog18";
import Blog19 from "./page/blogs/blog19";
import Blog20 from "./page/blogs/blog20";
import Blog21 from "./page/blogs/blog21";
import Blog22 from "./page/blogs/blog22";
import Blog23 from "./page/blogs/blog23";
import Blog24 from "./page/blogs/blog24";
import Blog25 from "./page/blogs/blog25";
import Blog26 from "./page/blogs/blog26";
import Blog27 from "./page/blogs/blog27";
import Blog28 from "./page/blogs/blog28";
import Blog29 from "./page/blogs/blog29";
import Blog30 from "./page/blogs/blog30";
import Blog31 from "./page/blogs/blog31";
import Blog32 from "./page/blogs/blog32";
import Blog33 from "./page/blogs/blog33";
import Blog34 from "./page/blogs/blog34";
import Blog35 from "./page/blogs/blog35";
import Blog36 from "./page/blogs/blog36";
import Blog37 from "./page/blogs/blog37";
import Blog38 from "./page/blogs/blog38";
import Blog39 from "./page/blogs/blog39";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/photography_videography" element={<ContentCreator />} />
        <Route path="/service/web-development" element={<Webdevelopment />} />
        <Route
          path="/service/branding-logos-design-graphic-design-packages"
          element={<LogoDesign />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/service/applications-development"
          element={<AppDevelopment />}
        />
        <Route
          path="/service/orm-online-reputation-management"
          element={<Orm />}
        />
        <Route path="/service/search-engine-optimization" element={<Seo />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/book" element={<BookConsultatnt />} />
        <Route path="/crm" element={<CrmHome />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/on-boarding" element={<Boarding />} />
        <Route path="/join-the-team" element={<Join />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="our-blogs" element={<Blogs />} />
        <Route path="blog-Pages" element={<BlogPages />} />

        {/* Blogs */}
        <Route path="blog-1" element={<Blog1 />} />
        <Route path="blog-2" element={<Blog2 />} />
        <Route path="blog-3" element={<Blog3 />} />
        <Route path="blog-4" element={<Blog4 />} />
        <Route path="blog-5" element={<Blog5 />} />
        <Route path="blog-6" element={<Blog6 />} />
        <Route path="blog-7" element={<Blog7 />} />
        <Route path="blog-8" element={<Blog8 />} />
        <Route path="blog-9" element={<Blog9 />} />
        <Route path="blog-10" element={<Blog10 />} />
        <Route path="blog-11" element={<Blog11 />} />
        <Route path="blog-12" element={<Blog12 />} />
        <Route path="blog-13" element={<Blog13 />} />
        <Route path="blog-14" element={<Blog14 />} />
        <Route path="blog-15" element={<Blog15 />} />
        <Route path="blog-16" element={<Blog16 />} />
        <Route path="blog-17" element={<Blog17 />} />
        <Route path="blog-18" element={<Blog18 />} />
        <Route path="blog-19" element={<Blog19 />} />
        <Route path="blog-20" element={<Blog20 />} />
        <Route path="blog-21" element={<Blog21 />} />
        <Route path="blog-22" element={<Blog22 />} />
        <Route path="blog-23" element={<Blog23 />} />
        <Route path="blog-24" element={<Blog24 />} />
        <Route path="blog-25" element={<Blog25 />} />
        <Route path="blog-26" element={<Blog26 />} />
        <Route path="blog-27" element={<Blog27 />} />
        <Route path="blog-28" element={<Blog28 />} />
        <Route path="blog-29" element={<Blog29 />} />
        <Route path="blog-30" element={<Blog30 />} />
        <Route path="blog-31" element={<Blog31 />} />
        <Route path="blog-32" element={<Blog32 />} />
        <Route path="blog-33" element={<Blog33 />} />
        <Route path="blog-34" element={<Blog34 />} />
        <Route path="blog-35" element={<Blog35 />} />
        <Route path="blog-36" element={<Blog36 />} />
        <Route path="blog-37" element={<Blog37 />} />
        <Route path="blog-38" element={<Blog38 />} />
        <Route path="blog-39" element={<Blog39 />} />
      </Routes>

      <Footer />

      <div className="chat-bot">
        <chat-widget
          location-id="bogHR1PsYHVej6WEbBzb"
          use-email-field="true"
          agency-name="Pulse Marketing Inc."
          agency-website="https://pulsemarketing.io/"
          locale="en-us"
        ></chat-widget>
      </div>
    </div>
  );
}
export default App;

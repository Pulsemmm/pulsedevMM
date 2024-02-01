import React, { Suspense } from "react";
import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { logoLg } from "../content/data";
import { logolink2 } from "../content/data";
import LazyLoadedImage from "./lazyLoadedImage";
import "../../style/main.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText, chroma } from "../../plugins/index.js";
import { Link } from "react-router-dom";
import footerImage from "../../assets/images/footer/footer2.PNG";

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);
  const menuAnim = useRef();

  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    }
  }, []);

  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;

    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("");
      let spanData = "";
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == " ") {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + "</div>";
      firstParent[0].innerHTML = result;
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let endTl = gsap.timeline({
          repeat: -1,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".end",
            start: "bottom 100%-=50px",
          },
        });
        gsap.set(".end", {
          opacity: 0,
        });
        gsap.to(".end", {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".end",
            start: "bottom 100%-=50px",
            once: true,
          },
        });
        let mySplitText = new SplitText(".end", { type: "words,chars" });
        let chars = mySplitText.chars;
        let endGradient = chroma.scale([
          "#F9D371",
          "#F47340",
          "#EF2F88",
          "#8843F2",
        ]);
        endTl.to(chars, {
          duration: 0.5,
          scaleY: 0.6,
          ease: "power3.out",
          stagger: 0.04,
          transformOrigin: "center bottom",
        });
        endTl.to(
          chars,
          {
            yPercent: -20,
            ease: "elastic",
            stagger: 0.03,
            duration: 0.8,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            stagger: 0.03,
            duration: 1.5,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            color: (i, el, arr) => {
              return endGradient(i / arr.length).hex();
            },
            ease: "power2.out",
            stagger: 0.03,
            duration: 0.3,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            yPercent: 0,
            ease: "back",
            stagger: 0.03,
            duration: 0.8,
          },
          0.7
        );
        endTl.to(chars, {
          color: "#c9f31d",
          duration: 1.4,
          stagger: 0.05,
        });
      });
      return () => tHero.revert();
    }
  }, []);

  const handleClickImage = () => {
    const imagelink =
      "https://www.bbb.org/ca/bc/vancouver/profile/digital-marketing/pulse-marketing-inc-0037-2428735/#sealclick";
    window.location.href = imagelink;
  };

  return (
    <>
      <div>
        <div className="pulse-footer d-flex">
          <div className="logo-content-wrapper ">
            {/* <Suspense fallback="Loading...">
              <LazyLoadedImage
                src={logoLg}
                alt="pulse logo"
                className="img-fluid pb-4"
              />
            </Suspense> */}
            <Link to="/">
              <a href="imagelink" target="_blank" onClick={handleClickImage}>
                <Suspense fallback="Loading...">
                  <LazyLoadedImage
                    src={logolink2}
                    alt="pulse logo"
                    className=" img-fluid pb-4  "
                  />
                </Suspense>
              </a>
            </Link>
            <p>
              Pulse Marketing is a sales-focused marketing firm based in
              Vancouver, British Columbia with an objective to increase revenue
              for all of our clients Pulse has served 8k+ happy customer and
              completed 25k+ projects over the last 10+ years in business from
              fortune 500 giants to locally owned businesses.
            </p>

            <img
              src={footerImage}
              alt="Footer Logo"
              loading="lazy"
              className="lazyloaded"
            />
          </div>

          <div className="social-links-wrapper ">
            <a
              href="https://www.facebook.com/pulsemarketing.ca/?modal=admin_todo_tour"
              target="_blank"
            >
              <div className="link-div v-center h-center gap-2">
                <span className="h-center v-center">
                  <Icon
                    icon="jam:facebook"
                    width="29"
                    height="29"
                    color="white"
                  />
                </span>
                <p className="text-white">Facebook</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/pulsemarketing.ca/"
              target="_blank"
            >
              <div className="link-div v-center h-center gap-2">
                <span className="h-center v-center">
                  <Icon
                    icon="grommet-icons:instagram"
                    width="22"
                    height="25"
                    color="white"
                  />
                </span>
                <p className="text-white">Instagram</p>
              </div>
            </a>
            <a
              href="https://www.google.com/search?rlz=1CDGOYI_enCA801CA923&hl=en-US&q=Pulse+Marketing+Inc.&ludocid=8690602816288484550&gsas=1&lsig=AB86z5VS1uhD8C0TEf_4MQU5HsGp&kgs=46e20b62b90303a0&shndl=-1&shem=lssle&source=sh/x/kp/local/3"
              target="_blank"
            >
              <div className="link-div v-center h-center gap-2">
                <span className="h-center v-center">
                  <Icon
                    icon="jam:google"
                    width="25"
                    height="25"
                    color="white"
                  />
                </span>
                <p className="text-white">Google</p>
              </div>
            </a>
            <a href="https://twitter.com/_pulsemarketing" target="_blank">
              <div className="link-div v-center h-center gap-2">
                <span className="h-center v-center">
                  <Icon
                    icon="ri:twitter-x-fill"
                    width="22"
                    height="25"
                    color="white"
                  />
                </span>
                <p className="text-white">Twitter</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/pulse-marketing-inc/"
              target="_blank"
            >
              <div className="link-div v-center h-center gap-2">
                <span className="h-center v-center">
                  <Icon
                    icon="basil:linkedin-solid"
                    width="25"
                    height="25"
                    color="white"
                  />
                </span>
                <p className="text-white">Linkedin</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/pulse-marketing-inc/"
              target="_blank"
            >
              <div className="link-div v-center h-center gap-2">
                <span className="h-center v-center">
                  <Icon
                    icon="ic:twotone-tiktok"
                    width="25"
                    height="25"
                    color="white"
                  />
                </span>
                <p className="text-white">TikTok</p>
              </div>
            </a>
          </div>

          <div className="nav-links-wrapper d-flex  flex-column">
            <div className="footer__contact-3">
              <Link className="end lets" to="/contact-us">
                Let’s talk
              </Link>
              <p className="end">
                BOOK YOUR FREE CONSULTATION WITH YOUR PULSE MARKETING EXPERT
                TODAY!
              </p>
            </div>
            {/* 
            <div className="bottom-links mt-5 pt-3">
              <a href="">Terms & conditions</a>
              <a href="">Privacy Policy</a>
              <a href="/about-us">About Us</a>
              <a href="/our-services">Services</a>
              <a href="/Faq">FAQ</a>
            </div> */}
          </div>
        </div>

        <div className="footer-links ">
          <ul className="footer-menu-2 menu-anim" ref={menuAnim}>
            <li>
              <Link to="about-us">about us</Link>
            </li>
            <li className="d-none">
              <Link to="contact-us">contact us</Link>
            </li>
            <li>
              <Link to="our-services">our services</Link>
            </li>
            <li>
              <Link to="/service/web-development">web dev</Link>
            </li>
            <li>
              <Link to="/service/applications-development">App-dev</Link>
            </li>
            <li>
              <Link to="/service/search-engine-optimization">Seo</Link>
            </li>
            <li>
              <Link to="/service/branding-logos-design-graphic-design-packages">
                Branding
              </Link>
            </li>
            <li>
              <Link to="on-boarding">on-boarding</Link>
            </li>
            <li>
              <Link to="join-the-team">join the team</Link>
            </li>

            <li>
              <Link to="crm">crm</Link>
            </li>
            <li>
              <Link to="audit">Audit</Link>
            </li>
            <li>
              <Link to="our-blogs">Our Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

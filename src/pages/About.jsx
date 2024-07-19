import React from "react";
import { useNavigate } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";

const About = () => {
  const navigait = useNavigate( );
  return (
    <div className=" ">
      <h1 className="h-[90px] flex justify-between p-5 w-full bg-[#fffafb] text-4xl text-pink-500 font-serif shadow-2xl">
        {" "}
        About
        
        <button onClick={()=> navigait("/")} className=" ">
        <CgArrowLongLeft />
        </button>
      </h1>

      <div className="p-6 sm:p-7">
        <h1 className="text-center text-pink-500 text-3xl font-serif">
          Our Story
        </h1>
        <div className=" sm:grid sm:grid-cols-2 w-full">
          <div>
            {" "}
            <img
              className="w-[600px]"
              src="/Aboutimg/img1.png"
              alt="imgA"
            />
          </div>

          <div className="text-left">
            {" "}
            <h2 className="sm:p-24 font-serif">
              Our journey began with one humble shop in Fort, Mumbai and grew to
              over one thousand locations throughout India under the inspiring
              vision of our founder, Hussein Khorakiwala in the early 1956.
              Since then, our family has combined their years of experience with
              the vision of a community of collaborative shop owners, suppliers
              and other partners working together to create a brand name in the
              market to grow their business to what it is today. In order to
              achieve this, the family offers franchises to budding
              entrepreneurs & distributors partnering with them to ensure
              success and excellence.
            </h2>{" "}
          </div>
        </div>
        <div>
          <h1 className=" flex justify-center text-pink-500 text-3xl font-serif">
            Our Mission, Values, and Vision
          </h1>
          <h3 className=" flex font-serif justify-center psm:-4">
            Creating exceptional cakes is our way of life, and our customers and
            partners are the focus of everything that we do. Our unwavering
            commitment to both our customers, franchise partners & distributors
            is the key to our success in the future. We are dedicated to
            creating a dynamic environment, conducting ourselves with the
            highest integrity for every component in our value chain: our
            customers, suppliers, team members, and franchise partners. By
            acting in the best interest of everyone along our value chain, we
            are able to ensure our company’s sweet success.
          </h3>
        </div>

        <div className="p-9">
          <h1 className="px-4 font-serif text-2xl text-pink-500">
            Our Core values are
          </h1>
          <ul>
            <li className="font-serif">
              1 All our products and services shall be offered with the same
              love, care, and affection as if, they were meant for the most
              beloved person.
            </li>
            <li className="font-serif">
              2 Being fair to all our customers, stakeholders and business
              partners, suppliers and employees. For we believe good intentions
              yield good products & services is to make Monginis living proof
              that hard-work, integrity, innovation, and continued support can
              lead to all levels of success.
            </li>
          </ul>
          <div className="py-8 font-serif ">
            <div className=" sm:flex  p-6">
              {" "}
              <div>
                <img className="" src="/Aboutimg/img2.png" alt="img1" />{" "}
              </div>
              <div>
                <h2 className=" sm:px-9 sm:py-7">
                  Our mission is to offer gourmet cakes, pastries, cupcakes,
                  cookies, and more that are universally enjoyed by family and
                  friends and make Monginis a part of all life’s celebrations
                  and memories
                </h2>
              </div>
            </div>

            <div className=" sm:flex  font-serif sm:p-6">
              <img src="/Aboutimg/img3.png" alt="img2" />{" "}
              <h2 className=" px-9 py-7">
                Our Core purpose is to help people express their happiness in a
                memorable way.
              </h2>
            </div>
            <div className=" sm:flex font-serif sm:p-6">
              <img src="/Aboutimg/img4.png" alt="img3" />{" "}
              <h2 className=" sm:px-9 sm:py-7">
                Our Passion Cakes are not just our business, they are our
                passion. Our Gateaux, Pastires, cupcakes, swiss rolls, and
                savories are all baked and prepared with the same love, care,
                and affection that would go into preparing for our own friends
                and family. To us, the cakes and pastries that go out into the
                market are not merely our product line, but are our way to bring
                something we love into our customers homes
              </h2>
            </div>
          </div>

          <div>
            <h1 className="px-4 font-serif text-3xl text-pink-500 text-center">
              Our Secret
            </h1>

            <div className=" sm:grid sm:grid-cols-2 w-full">
              <div>
                {" "}
                <img
                  className="w-[600px]"
                  src="/Aboutimg/img5.png"
                  alt="imgA"
                />
              </div>

              <div className="text-left">
                {" "}
                <h2 className="sm:p-24 font-serif">
                  Monginis only uses the finest ingredients in its products,
                  ensuring the goods that we send out into the market are of the
                  utmost quality. Monginis believes in order to give the Real
                  taste of any product, real ingredients should be used & not
                  cheaper substitutes. Our production includes a
                  highly-customized, automated system but does not forego the
                  importance of the human touch, while still adhering to strict
                  quality control measures at every stage of production,
                  packaging, and delivery. Combining technology and people is
                  what ensures that our products are the best. Without our
                  dedicated, skilled, and loyal team members, Monginis would not
                  be where it is today.
                </h2>{" "}
              </div>
            </div>
            <div>
              <h1 className="sm:px-4 font-serif text-3xl text-pink-500 text-center">
                Our Stores
              </h1>
              <p className="sm:p-4 font-serif">
                Our Cake Shops are conveniently located in local markets and
                communities to ensure the easy availability of your favorite
                Monginis cakes, cupcakes, and more. Whether it is for a
                birthday, anniversary, wedding, or just an evening at home,
                Monginis has the perfect custom-made, personalized cake for you
                or your choice from our off-the-shelf customer favorites! Great
                quality, service, and ethics has developed Monginis into a
                household name with our 700+ outlets. On an average 1,40,000
                customers visit our cake shop daily across the country. Our Cake
                Shops owners are dedicated to the absolute satisfaction of the
                customer. Additionally, our long shelf life packaged cakes
                products are available across 10,00,000 outlets nationally with
                a sizeable presence in Mall, Super markets and on Railway
                stations
              </p>
            </div>
            <div className=" ">
              <div className="sm:p-16 p-5">
                <h1 className="sm:px-4 font-serif text-3xl text-pink-500 text-center">
                  Our Moral Responsibility
                </h1>
                <h4 className="sm:px-4 font-serif text-center">
                  Our Moral Responsibility
                </h4>
              </div>

              <h1 className="px-4 font-serif text-2xl text-pink-500 p-3">
                Food Processing Sanitation/Hygiene
              </h1>
              <p className="font-serif">
                The philosophical viewpoint of the Food and Drug Administration
                is that they would prefer to see industries bring their plants
                into compliance voluntarily rather than to force compliance
                through FDA action. The government rarely takes legal action
                against a processor without first making an inspection. The
                simplest examples are the finding of food products containing
                whole insects, very large fragments, whole rodent pellets or
                hairs, or in general, extraneous matter characterized by large
                size, indicating that the filth did not come from the raw
                ingredients.
              </p>
              <h1 className="px-4 font-serif text-2xl text-pink-500 p-3">Our standards</h1>
              <p>
                We are a HACCP & ISO : 22000 certified company. We believe in
                ensuring the highest degree of sanitation and hygiene. We also
                follow Good Manufacturing practices levied by the AIB (The
                American Institute of Baking).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

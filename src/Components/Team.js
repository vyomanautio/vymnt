import React, { useState, useEffect } from "react";
import Zmage from "react-zmage";
import { useTranslation } from "react-i18next";

let id = 0;
function Team(props){

    const { t } = useTranslation();

    var [faq1, setFaq1] = useState(false);
    var [faq2, setFaq2] = useState(false);
    var [faq3, setFaq3] = useState(false);
    var [faq4, setFaq4] = useState(false);
    var [faq5, setFaq5] = useState(false);
    var [faq6, setFaq6] = useState(false);

    return (
      <section id="portfolio">
          <div className="text-center watch_banner-custom-css">
            <img src={'/images/Watch_banner.png'} alt="boohoo" className="img-to-fit"/>
          </div>
          <div className="row faq-css-custom">
            <div className="col-md-5 col-5 border-bottom border-white pb-0 ">
              <div className="row">
                <div className="col-lg-4 col-md-4 d-lg-block d-md-block d-none"><img src={'/images/ISROlogo.png'} alt="ISRO" class="isrologo-brand float-end" /></div>
                <div className="col-lg-4 col-md-4 d-lg-block d-md-block d-none text-center">
                  <img src={'/images/orangeLogo.png'} alt="ISRO" class="ind1947-brand" />
                </div>
                <div className="col-lg-4 col-md-4 d-lg-block d-md-block d-none"><h1 className="text-white faq-font float-end me-4">FAQ</h1></div>
                <div className="d-lg-none d-md-none d-block col-12">
                  <h1 className="text-white text-center faq-font">
                    FAQ
                  </h1>
                </div>
                <div className="d-lg-none d-md-none d-block col-6">
                  <img src={'/images/ISROlogo.png'} alt="ISRO" class="isrologo-brand ms-5" />
                </div>
                <div className="d-lg-none d-md-none d-block col-6">
                  <img src={'/images/orangeLogo.png'} alt="ISRO" class="ind1947-brand ms-2" />
                </div>
              </div>
            </div>
            <div className="col-md-1 col-1"></div>
            <div className="col-md-5 col-5 border-top border-white faq-part2-css">
                <div className="text-white mt-3 cursor-custom" onClick={()=>{
                    setFaq1(!faq1);
                    setFaq2(false);
                    setFaq3(false);
                    setFaq4(false);
                    setFaq5(false);
                    setFaq6(false);
                }}>
                  {t('WHEN IS THE MINT DATE?')}
                </div>
                {faq1?(
                  <div className="text-dark ps-4 bg-white faq-ans">
                    {t('February, 2022. We will keep you posted about the exact date.')}
                  </div>
                ):null}

                <div className="text-white mt-3 cursor-custom" onClick={()=>{
                    setFaq2(!faq2);
                    setFaq1(false);
                    setFaq3(false);
                    setFaq4(false);
                    setFaq5(false);
                    setFaq6(false);
                }}>
                  {t('HOW MANY DROPS WILL THERE BE?')}
                </div>
                {faq2?(
                  <div className="text-dark ps-4 bg-white faq-ans">
                    {t('Two Main Drops, and plenty of other air drops and giveaways.')}
                  </div>
                ):null}

                <div className="text-white mt-3 cursor-custom" onClick={()=>{
                    setFaq3(!faq3);
                    setFaq1(false);
                    setFaq2(false);
                    setFaq4(false);
                    setFaq5(false);
                    setFaq6(false);
                }}>
                  {t('WHAT BLOCKCHAIN WILL IT BE ON?')}
                </div>
                {faq3?(
                  <div className="text-dark ps-4 bg-white faq-ans">
                    {t('Polygon Matic')}
                  </div>
                ):null}

                <div className="text-white mt-3 cursor-custom" onClick={()=>{
                  setFaq4(!faq4);
                  setFaq1(false);
                  setFaq2(false);
                  setFaq3(false);
                  setFaq5(false);
                  setFaq6(false);
                }}>
                  {t('HOW MUCH WILL IT COST TO MINT?')}
                </div>
                {faq4?(
                  <div className="text-dark ps-4 bg-white faq-ans">
                    {t(`For The Watch, the cost is 20,000 INR or equivalent worth of Polygon Matic 
For The 500 Super Geek Card, the cost is 27,000 INR`)}
                  </div>
                ):null}

                <div className="text-white  mt-3 cursor-custom" onClick={()=>{
                    setFaq5(!faq5);
                    setFaq1(false);
                    setFaq2(false);
                    setFaq3(false);
                    setFaq4(false);
                    setFaq6(false);
                }}>
                  {t('HOW MANY CAN BE MINTED PER PERSON?')}
                </div>
                {faq5?(
                  <div className="text-dark ps-4 bg-white faq-ans">
                    {t(`Maximum 5 per wallet`)}
                  </div>
                ):null}

                <div className="text-white  mt-3 cursor-custom" onClick={()=>{
                    setFaq6(!faq6);
                    setFaq1(false);
                    setFaq2(false);
                    setFaq3(false);
                    setFaq4(false);
                    setFaq5(false);
                  }}>
                  {t('WHAT IS THE BENEFIT OF HOLDING SPACE GEEK CARDS?')}
                </div>
                {faq6?(
                  <div className="text-dark ps-4 bg-white faq-ans">
                    {t(`The Space Geek Card gives you a free pass and gets you whitelisted by default for all the future drops.
This will give you Two Main NFTs: * Super Space Geek Card + * ISRO watch NFT
It will grant you free of cost access to more Rocketry project NFTs (1-3) in the future
In the future, it will also give you access to special merch drops, exclusive for space geeks`)}
                  </div>
                ):null}
            </div>
          </div>
      </section>
    );
}

export default Team;

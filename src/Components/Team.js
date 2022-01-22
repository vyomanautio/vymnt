import React, { Component } from "react";
import Zmage from "react-zmage";
import { useTranslation } from "react-i18next";

let id = 0;
function Team(props){

    const { t } = useTranslation();

    

    return (
      <section id="portfolio">
          {/* <div className="row mt-5">
            <div className="col-md-1 col-1 d-md-block d-none">
              <hr className="custom-css-hr-member"/>
            </div>
            <div className="col-md-10 col-12 margin-left-team-custom">
              <div className="row">
                <div className="col-md-2 col-2 border border-white pt-4 px-0">
                  <div className="text-white border border-white custom-label-member">
                    {t('app.team.founder')}
                  </div>
                  <img src={'/images/members.png'} alt="ISRO" class="ml-5"/>
                </div>
                <div className="col-md-1 col-1 px-0 text-white">
                  <hr className="custom-css-hr-member"/>
                </div>
                <div className="col-md-2 col-2 border border-white pt-4 px-0">
                  <div className="text-white border border-white custom-label-member custom-label-member-community-dev">
                    {t('app.team.community.dev')}
                  </div>
                  <img src={'/images/members.png'} alt="ISRO" class="ml-5"/>
                </div>
                <div className="col-md-1 col-1 px-0 text-white">
                  <hr className="custom-css-hr-member"/>
                </div>
                <div className="col-md-2 col-2 border border-white pt-4 px-0">
                  <div className="text-white border border-white custom-label-member custom-label-member-web-dev">
                    {t('app.team.web.dev')}
                  </div>
                  <img src={'/images/members.png'} alt="ISRO" class="ml-5"/>
                </div>
                <div className="col-md-1 col-1 px-0 text-white">
                  <hr className="custom-css-hr-member"/>
                </div>
                <div className="col-md-2 col-2 border border-white pt-4 px-0">
                  <div className="text-white border border-white custom-label-member custom-label-member-community-dev">
                    {t('app.team.content.dev')}
                  </div>
                  <img src={'/images/members.png'} alt="ISRO" class="ml-5"/>
                </div>
                <div className="col-md-1 col-1 px-0 text-white">
                  <hr className="custom-css-hr-member"/>
                </div>
              </div>
            </div>
            <div className="col-md-1 col-1 d-md-block d-none">
              <hr className="custom-css-hr-member"/>
            </div>
          </div> */}
          <div className="row faq-css-custom">
            <div className="col-md-5 col-5 border-bottom border-white pb-0 ">
              <h1 className="text-white faq-font float-end me-4">FAQ ?</h1>
            </div>
            <div className="col-md-1 col-1"></div>
            <div className="col-md-5 col-5 border-top border-white faq-part2-css">
                <div className="text-white mt-3 cursor-custom">
                  {t('WHEN IS THE MINT DATE?')}
                </div>
                <div className="text-white  mt-3 cursor-custom">
                  {t('HOW MANY DROPS WILL THERE BE?')}
                </div>
                <div className="text-white  mt-3 cursor-custom">
                  {t('WHAT BLOCKCHAIN WILL IT BE ON?')}
                </div>
                <div className="text-white  mt-3 cursor-custom">
                  {t('HOW MUCH WILL IT COST TO MINT?')}
                </div>
                <div className="text-white  mt-3 cursor-custom">
                  {t('HOW MANY CAN BE MINTED PER PERSON?')}
                </div>
                <div className="text-white  mt-3 cursor-custom">
                  {t('WHERE CAN I MINT?')}
                </div>
                <div className="text-white  mt-3 cursor-custom">
                  {t('WHAT IS THE BENEFIT OF HOLDING SPACE GEEK CARDS?')}
                </div>
            </div>
          </div>
      </section>
    );
}

export default Team;

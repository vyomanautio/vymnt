import React, { Component } from "react";
import Zmage from "react-zmage";
import { useTranslation } from "react-i18next";

let id = 0;
function Team(props){

    const { t } = useTranslation();

    

    return (
      <section id="portfolio">
          
          <div className="row mt-5">
            <div className="col-md-1">
              <hr className="custom-css-hr-member"/>
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-2 border border-white pt-4 px-0">
                  <div className="text-white border border-white custom-label-member">
                    {t('app.team.founder')}
                  </div>
                  <img src={'/images/members.png'} alt="ISRO" class="ml-5"/>
                </div>
                <div className="col-md-1 px-0 text-white">
                  <hr className="custom-css-hr-member"/>
                </div>
                <div className="col-md-2 border border-white pt-4 px-0">
                  <div className="text-white border border-white custom-label-member custom-label-member-community-dev">
                    {t('app.team.community.dev')}
                  </div>
                  <img src={'/images/members.png'} alt="ISRO" class="ml-5"/>
                </div>
                <div className="col-md-1 px-0 text-white">
                  <hr className="custom-css-hr-member"/>
                </div>
                <div className="col-md-2 border border-white pt-4 px-0">
                  <div className="text-white border border-white custom-label-member custom-label-member-web-dev">
                    {t('app.team.web.dev')}
                  </div>
                  <img src={'/images/members.png'} alt="ISRO" class="ml-5"/>
                </div>
                <div className="col-md-1 px-0 text-white">
                  <hr className="custom-css-hr-member"/>
                </div>
                <div className="col-md-2 border border-white pt-4 px-0">
                  <div className="text-white border border-white custom-label-member custom-label-member-community-dev">
                    {t('app.team.content.dev')}
                  </div>
                  <img src={'/images/members.png'} alt="ISRO" class="ml-5"/>
                </div>
                <div className="col-md-1 px-0 text-white">
                  <hr className="custom-css-hr-member"/>
                </div>
              </div>
            </div>
            <div className="col-md-1">
              <hr className="custom-css-hr-member"/>
            </div>
          </div>
      </section>
    );
}

export default Team;

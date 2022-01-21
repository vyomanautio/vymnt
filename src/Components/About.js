import React from "react";
import { useTranslation } from "react-i18next";

function About(props) {
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div class="col-lg-3 col-md-2 col-1 border-top  border-1-custom"></div>
          <div class="col-lg-6 col-md-8 col-10   border border-1-custom pb-4 pe-4">
            <h5 className="text-white text-decoration">{t('app.about.001')}</h5>
          </div>
          <div class="col-lg-3 col-md-2 col-1 border-top   border-1-custom"></div>
        </div>
        <div className="row">
          <div class="col-lg-3 col-md-2 col-1 border-top border-1-custom"></div>
          <div class="col-lg-6 col-md-8 col-10   border border-1-custom pb-4 pe-4">
            <h5 className="text-white text-decoration">{t('app.about.002')}</h5>
          </div>
          <div class="col-lg-3 col-md-2 col-1 border-top border-1-custom"></div>
        </div>
        <div className="row">
          <div class="col-lg-3 col-md-2 col-1 border-top  border-1-custom"></div>
          <div class="col-lg-6 col-md-8 col-10   border border-1-custom pb-4 pe-4">
            <h5 className="text-white text-decoration">{t('app.about.003')}</h5>
          </div>
          <div class="col-lg-3 col-md-2 col-1 border-top border-1-custom"></div>
        </div>
        <div className="row">
          <div class="col-lg-3 col-md-2 col-1 border-top  border-1-custom"></div>
          <div class="col-lg-6 col-md-8 col-10   border border-1-custom pb-4 pe-4">
            <h5 className="text-white text-decoration">{t('app.about.004')}</h5>
          </div>
          <div class="col-lg-3 col-md-2 col-1 border-top border-1-custom"></div>
        </div>
        <div className="row">
          <div class="col-lg-3 col-md-2 col-1 border-top  border-1-custom"></div>
          <div class="col-lg-6 col-md-8 col-10   border border-1-custom">
            <div className="row">
              <div className="col-md-3">
                <img src={'/images/isro.png'} alt="ISRO" class="isro-img-custom" />
              </div>
              <div className="col-md-6 text-center pb-2">
                <h1 className="text-danger-custom cursor-custom mt-4">{t('app.start.minting')}</h1>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-2 col-1 border-top border-1-custom"></div>
        </div>
        <div className="row">
          <div class="col-lg-3 col-md-2 col-1 border-top border-bottom border-1-custom"></div>
          <div class="col-lg-6 col-md-8 col-10   border border-1-custom pt-4 pb-4 z-index-rocket">
            <div className="text-center">
              <img src={'/images/1.png'} alt="ISRO" class="minting-img-custom cursor-custom" />
              <img src={'/images/2.png'} alt="ISRO" class="minting-img-custom cursor-custom mx-2" />
              <img src={'/images/3.png'} alt="ISRO" class="minting-img-custom cursor-custom" />
            </div>
          </div>
          <div class="col-lg-3 col-md-2 col-1 border-top border-bottom border-1-custom"></div>
        </div>
        <br/>
        <div className="row mt-4 bg-dark-custom">
          <div className="col-lg-5 col-md-4 col-6">
            <table className="text-white text-center table-css-custom-1">
              <tr className="border border-white">
                <th>
                  <div className="text-white p-4">
                    {t('app.super.geek.card')}
                  </div>
                </th>
              </tr>
              <tr className="border">
                <td>
                  <img src={'/images/CARD.png'} alt="ISRO" class="ml-5 product-height" />
                </td>
              </tr>
              <tr className="border border-white">
                <td className="p-4 custom-product-width">
                  {t('app.watch.card')}<br /><br />
                  {t('app.watch.card2')}
                </td>
              </tr>
            </table>
          </div>
          <div className="col-lg-2 col-md-4 col-2 d-md-block d-none"></div>
          <div className="col-lg-5 col-md-4 col-6">
            <table className="text-white text-center table-css-custom-2">
              <tr className="border border-white">
                <th>
                  <div className="text-white p-4">
                    {t('app.isro.watch.official')}
                  </div>
                </th>
              </tr>
              <tr className="border border-white">
                <td>
                  <img src={'/images/new/watchGif.gif'} alt="ISRO" class="ml-5 product-height" />
                </td>
              </tr>
              <tr className="border border-white">
                <td className="p-4 custom-product-width">
                  {t('app.watch.discription')}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

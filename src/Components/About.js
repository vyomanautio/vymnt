import React from "react";
import { useTranslation } from "react-i18next";

function About(props) {
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div class="col-md-3 col-1 border-top  border-1-custom"></div>
          <div class="col-md-6 col-10   border border-1-custom p-4">
            <div className="text-white text-decoration"><strong>{t('app.about.001')}</strong></div>
          </div>
          <div class="col-md-3 col-1 border-top   border-1-custom"></div>
        </div>
        <div className="row">
          <div class="col-md-3 col-1 border-top border-1-custom"></div>
          <div class="col-md-6 col-10   border border-1-custom p-4">
            <h5 className="text-white text-decoration"><strong>{t('app.about.002')}</strong></h5>
          </div>
          <div class="col-md-3 col-1 border-top border-1-custom"></div>
        </div>
        <div className="row">
          <div class="col-md-3 col-1 border-top  border-1-custom"></div>
          <div class="col-md-6 col-10   border border-1-custom p-4">
            <h5 className="text-white text-decoration"><strong>{t('app.about.003')}</strong></h5>
          </div>
          <div class="col-md-3 col-1 border-top border-1-custom"></div>
        </div>
        <div className="row">
          <div class="col-md-3 col-1 border-top  border-1-custom"></div>
          <div class="col-md-6 col-10   border border-1-custom p-4">
            <h5 className="text-white text-decoration"><strong>{t('app.about.004')}</strong></h5>
          </div>
          <div class="col-md-3 col-1 border-top border-1-custom"></div>
        </div>
        <div className="row">
          <div class="col-md-3 col-1 border-top  border-1-custom"></div>
          <div class="col-md-6 col-10   border border-1-custom">
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
          <div class="col-md-3 col-1 border-top border-1-custom"></div>
        </div>
        <div className="row">
          <div class="col-md-3 col-1 border-top border-bottom border-1-custom"></div>
          <div class="col-md-6 col-10   border border-1-custom pt-4 pb-4 z-index-rocket">
            <div className="text-center">
              <img src={'/images/1.png'} alt="ISRO" class="minting-img-custom cursor-custom" />
              <img src={'/images/2.png'} alt="ISRO" class="minting-img-custom cursor-custom mx-2" />
              <img src={'/images/3.png'} alt="ISRO" class="minting-img-custom cursor-custom" />
            </div>
          </div>
          <div class="col-md-3 col-1 border-top border-bottom border-1-custom"></div>
        </div>
        <br/>
        <div className="row mt-4 bg-dark-custom">
          <div className="col-md-5 col-5">
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
                  <img src={'/images/CARD.png'} alt="ISRO" class="ml-5" />
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
          <div className="col-md-2 col-2"></div>
          <div className="col-md-5 col-5">
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
                  <img src={'/images/watch.png'} alt="ISRO" class="ml-5" />
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

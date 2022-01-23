import React from "react";
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from "react-i18next";

function Timeline(props) {
  
    const { t } = useTranslation();
    return (
        <div>
            <div className="row">
                <div className="col-md-2 col-3">
                    <img src={'/images/GSLV1A.png'} alt="ISRO" class=" cursor-custom GSLV1A-custom"/>
                </div>
                <div className="col-md-8 col-8">
                    <div class="timeline">
                        <div class="container-custom left">
                            <div class="content-custom border-white border border-2">
                                <div className="border border-white border-2 timeline-header text-white ps-2"><b>{t('app.stage1')}{' : '}</b><span>{t('app.stage1,label')}</span></div>
                                <p className="mt-4">{t('app.stagemap.s1')}</p>
                            </div>
                        </div>
                        <div class="container-custom right">
                            <div class="content-custom border-white border border-2">
                            <div className="border border-white border-2 timeline-header-right text-white pe-3"><b>{t('app.stage2')}{' : '}</b><span>{t('app.stage2.label')}</span></div>
                            <p className="mt-4">{t('app.stagemap.s2')}</p>
                            </div>
                        </div>
                        <div class="container-custom left">
                            <div class="content-custom border-white border border-2">
                                <div className="border border-white border-2 timeline-header text-white ps-2"><b>{t('app.stage3')}{' : '}</b><span>{t('app.stage3.label')}</span></div>
                                <p className="mt-4">{t('app.stagemap.s3')}</p>
                            </div>
                        </div>
                        <div class="container-custom right">
                            <div class="content-custom border-white border border-2">
                            <div className="border border-white border-2 timeline-header-right text-white pe-3"><b>{t('app.stage4')}{' : '}</b><span>{t('app.stage4.label')}</span></div>
                            <p className="mt-4">{t('app.stagemap.s4')}</p>
                            </div>
                        </div>
                        <div class="container-custom left">
                            <div class="content-custom border-white border border-2">
                                <div className="border border-white border-2 timeline-header text-white ps-2"><b>{t('app.stage5')}{' : '}</b><span>{t('app.stage5.label')}</span></div>
                                <p className="mt-4">{t('app.stagemap.s5')}</p>
                            </div>
                        </div>
                        <div class="container-custom right">
                            <div class="content-custom border-white border border-2">
                            <div className="border border-white border-2 timeline-header-right text-white pe-3"><b>{t('app.stage6')}{' : '}</b><span>{t('app.stage6.label')}</span></div>
                            <p className="mt-4">{t('app.stagemap.s6')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-4 pt-md-5 pt-none">
                    <span className="align-middle">
                        <img src={'/images/sattelitetilted.png'} alt="ISRO" className="mt-5"/>
                    </span>
                </div>
            </div>
            
            <div className="text-center">
                    <img src={'/images/new/Billiontype.svg'} alt="ISRO" class="cursor-custom billion-ind-dream"/>
            </div>
        </div>
    );
  
}

export default Timeline;
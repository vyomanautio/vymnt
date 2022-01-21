import React from "react";
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from "react-i18next";

function Timeline(props) {
  
    const { t } = useTranslation();
    return (
        <div>
            <div className="row">
                <div className="col-md-2 col-2">
                    <img src={'/images/rocket1.png'} alt="ISRO" class=" cursor-custom"/>
                </div>
                <div className="col-md-8 col-8">
                    {/* <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'white' }} //
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date=""
                            iconStyle={{ background: 'pink', color: 'pink' }}

                        >
                            <div className="text-dark border-bottom">
                                <h1>{t('app.stage1')}</h1>{t('app.stage1,label')}
                            </div>
                            <div className="text-dark mt-2">
                                <h5>{t('app.stagemap.s1')}</h5>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date=""
                            iconStyle={{ background: 'white', color: 'white' }}
                            contentStyle={{ background: 'white', color: 'white' }}
                        >
                            <div className="text-dark border-bottom">
                                <h1>{t('app.stage2')}</h1>{t('app.stage2.label')}
                            </div>
                            <div className="text-dark mt-2">
                                <h5>{t('app.stagemap.s2')}</h5>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date=""
                            iconStyle={{ background: 'white', color: 'white' }}

                        >
                            <div className="text-dark border-bottom">
                                <h1>{t('app.stage3')}</h1>{t('app.stage3.label')}
                            </div>
                            <div className="text-dark mt-2">
                                <h5>{t('app.stagemap.s3')}</h5>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date=""
                            iconStyle={{ background: 'white', color: 'white' }}

                        >
                            <div className="text-dark border-bottom">
                                <h1>{t('app.stage4')}</h1>{t('app.stage4.label')}
                            </div>
                            <div className="text-dark mt-2">
                                <h5>{t('app.stagemap.s4')}</h5>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date=""
                            iconStyle={{ background: 'white', color: 'white' }}

                        >
                            <div className="text-dark border-bottom">
                                <h1>{t('app.stage5')}</h1>{t('app.stage5.label')}
                            </div>
                            <div className="text-dark mt-2">
                                <h5>{t('app.stagemap.s5')}</h5>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date=""
                            iconStyle={{ background: 'white', color: '#fff' }}

                        >
                            <div className="text-dark border-bottom">
                                <h1>{t('app.stage6')}</h1>{t('app.stage6.label')}
                            </div>
                            <div className="text-dark mt-2">
                                <h5>{t('app.stagemap.s6')}</h5>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'black', color: '#fff' }}

                        />
                    </VerticalTimeline> */}
                    <div class="timeline">
                        <div class="container-custom left">
                            <div class="content-custom border-white border border-2">
                                <div className="border border-white border-2 timeline-header text-white ps-2"><b>{t('app.stage1')}{' : '}</b><span>{t('app.stage1,label')}</span></div>
                                <p className="mt-4">{t('app.stagemap.s1')}</p>
                            </div>
                        </div>
                        <div class="container-custom right">
                            <div class="content-custom border-white border border-2">
                            <div className="border border-white border-2 timeline-header-right text-white ps-2"><b>{t('app.stage2')}{' : '}</b><span>{t('app.stage2.label')}</span></div>
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
                            <div className="border border-white border-2 timeline-header-right text-white ps-2"><b>{t('app.stage4')}{' : '}</b><span>{t('app.stage4.label')}</span></div>
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
                            <div className="border border-white border-2 timeline-header-right text-white ps-2"><b>{t('app.stage6')}{' : '}</b><span>{t('app.stage6.label')}</span></div>
                            <p className="mt-4">{t('app.stagemap.s6')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-2">
                    <span className="align-middle">
                        <img src={'/images/rocket2.png'} alt="ISRO" className="mt-5"/>
                    </span>
                </div>
            </div>
            
                <div className="text-center">
                    <img src={'/images/BILLION_IDNIAN_DREAMS.png'} alt="ISRO" class="mt-5 cursor-custom billion-ind-dream"/>
                </div>
        </div>
    );
  
}

export default Timeline;
import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from "react-i18next";

function Timeline(props) {
  
    const { t } = useTranslation();
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <img src={'/images/rocket1.png'} alt="ISRO" class=" cursor-custom"/>
                </div>
                <div className="col-md-8">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'white' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date=""
                            iconStyle={{ background: 'white', color: '#fff' }}

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
                                <h1>{t('app.stage3')}</h1>SPACING OUT? NOPE! CHECK THE TIME
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
                                <h1>{t('app.stage4')}</h1>UNIVERSE OF METAVERSE
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
                                <h1>{t('app.stage5')}</h1>A HISTORIC WALKTHROUGH
                            </div>
                            <div className="text-dark mt-2">
                                <h5>{t('app.stagemap.s5')}</h5>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2012"
                            iconStyle={{ background: 'white', color: '#fff' }}

                        >
                            <div className="text-dark border-bottom">
                                <h1>{t('app.stage6')}</h1>EVOLUTION OF THE COMMUNITY
                            </div>
                            <div className="text-dark mt-2">
                                <h5>{t('app.stagemap.s6')}</h5>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'black', color: '#fff' }}

                        />
                    </VerticalTimeline>
                </div>
                <div className="col-md-2 ">
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
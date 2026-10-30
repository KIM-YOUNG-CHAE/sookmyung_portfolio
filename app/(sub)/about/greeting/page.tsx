import "./greeting.css";

export default function Page() {
    return (
        <div className="content-box">
            <div className="con-box no-pd">
                <div className="greeting-wrap">
                    <div className="img-box">
                        <img 
                          src="/assets/images/sub/about/img-greeting.png" 
                          alt="디자인 백그라운드 이미지" 
                        />
                    </div>
                    <div className="greeting-box">
                        <p className="greeting-tit">
                            끊임없는 상상과 도전으로 여는 새로운 미래 (S-Lab)
                            <span>모든 세대의 창의적 성장을 이끄는, 창학 120주년 제3의 비전<br/>기술과 예술의 경계를 허물며 미래 가치를 창조하는 크리에이티브 스튜디오</span>
                        </p>
                        <p className="con-p">우리는 기술과 인간이 공존하는 급변하는 디지털 시대를 맞이하고 있습니다. 이에 따라 오늘날 디자인이 지닌 가치는 단순한 시각적 완성도나 형태의 구현을 넘어, 인간의 삶을 더 이롭게 만드는 ‘보편적 가치’와 깊이 있는 ‘인문학적 통찰’을 유기적으로 융합하는 글로벌 디자인 교육 및 실무 모델을 지향하고 있습니다. 표면적인 트렌드를 좇기보다 본질을 꿰뚫는 시각을 기르는 것이 우리의 핵심 목표입니다.</p>
                        <p className="con-p">변화하는 시대 흐름에 맞춰 유연하게 사고하고, 사용자 중심의 실질적인 문제 해결 능력을 갖춘 인재를 양성하는 데 주력하고 있습니다. 다채로운 협업과 실험적인 프로젝트를 통해 구성원 저마다의 잠재력을 최대치로 끌어올리고 있습니다.</p>
                        <p className="con-p">창의적 역량을 다각도로 발전시키고 서로를 지지하는 글로벌 커뮤니티로서, 급변하는 산업 생태계 속에서 모든 이들이 당당히 혁신의 주역으로 자리매김하고 지속 가능한 미래를 이끌어갈 수 있도록 항상 최전선에서 아낌없이 지원하고 앞장서겠습니다.</p>
                        <p className="con-p no-pd">감사합니다.</p>
                        <p className="name-p">디자인학부 S-Lab 기획팀</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
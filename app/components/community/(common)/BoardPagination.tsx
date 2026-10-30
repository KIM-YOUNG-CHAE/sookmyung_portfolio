export default function BoardPagination() {
    return (
        <div className="b-paging">
            <div className="b-paging-wrap">
                <ul>
                    <li className="first pager"><a href="#none" title="첫 페이지로 이동하기"><span className="hide">첫 페이지로 이동하기</span></a></li>
                    <li className="prev pager"><a href="#none" title="이전 페이지로 이동하기"><span className="hide">이전 페이지로 이동하기</span></a></li>
                    <li><a className="active" href="#none">1</a></li>
                    <li><a href="#none">2</a></li>
                    <li><a href="#none">3</a></li>
                    <li><a href="#none">4</a></li>
                    <li><a href="#none">5</a></li>
                    <li><a href="#none">6</a></li>
                    <li><a href="#none">7</a></li>
                    <li><a href="#none">8</a></li>
                    <li><a href="#none">9</a></li>
                    <li><a href="#none">10</a></li>
                    <li className="next pager"><a href="#none" title="다음 페이지로 이동하기"><span className="hide">다음 페이지로 이동하기</span></a></li>
                    <li className="last pager"><a href="#none" title="마지막 페이지로 이동하기"><span className="hide">마지막 페이지로 이동하기</span></a></li>
                </ul>
            </div>
        </div>
    );
}
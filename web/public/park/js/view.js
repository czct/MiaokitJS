define("baseData", ["require", "exports", "react", "css!./styles/baseData.css"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const data = [
        {
            country: '����',
            month: '1��',
            value: 30,
        },
        {
            country: '����',
            month: '2��',
            value: 50,
        },
        {
            country: '����',
            month: '3��',
            value: 80,
        },
        {
            country: '����',
            month: '4��',
            value: 100,
        },
        {
            country: '����',
            month: '5��',
            value: 80,
        },
        {
            country: '����',
            month: '6��',
            value: 50,
        },
        {
            country: '����',
            month: '7��',
            value: 30,
        },
        {
            country: '�ʺ�',
            month: '1��',
            value: 20,
        },
        {
            country: '�ʺ�',
            month: '2��',
            value: 60,
        },
        {
            country: '�ʺ�',
            month: '3��',
            value: 120,
        },
        {
            country: '�ʺ�',
            month: '4��',
            value: 70,
        },
        {
            country: '�ʺ�',
            month: '5��',
            value: 50,
        },
        {
            country: '�ʺ�',
            month: '6��',
            value: 30,
        },
        {
            country: '�ʺ�',
            month: '7��',
            value: 20,
        },
    ];
    class BaseData extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                baseData: [{ name: "���������", number: "95,000", unit: "ƽ����", img: 'architecture' }, { name: "��פ��ҵ", number: "150", unit: "��", img: "enterprise" },
                    { name: "԰����Ա", number: "6,000", unit: "��", img: "personnel" }, { name: "������", number: "900", unit: "̨", img: "monitoring" },
                    { name: "�����豸", number: "2,600", unit: "̨", img: "equipment" }, { name: "ͣ��λ", number: "600", unit: "��", img: "car" }],
            };
        }
        componentDidMount() {
            let baseDate = this.state.baseData;
            baseDate.forEach((item, index) => {
                requireContext.keys().forEach((it, ind) => {
                    if (it.substring(2, it.length - 4) === item.img) {
                        item.img = images[ind].default;
                    }
                });
            });
            this.setState({ baseData: baseDate });
            const areaPlot = new StackArea(document.getElementById('curve'), {
                data,
                xField: 'month',
                yField: 'value',
                stackField: 'country',
                xAxis: {
                    grid: {
                        visible: true
                    }
                },
                label: {
                    visible: true
                },
                smooth: true,
                legend: {
                    visible: false,
                    position: 'right-top'
                }
            });
            areaPlot.render();
        }
        render() {
            return (React.createElement("div", { className: "baseData" },
                React.createElement("div", { style: { marginTop: "20px", marginLeft: "25px" } },
                    React.createElement("div", { style: {
                            borderLeft: "2px solid #07D1D3", height: "16px", width: "2px",
                            float: "left", marginTop: "4px", marginRight: "5px"
                        } }),
                    React.createElement("span", { style: { color: "#FFFFFF", fontSize: "16px" } }, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u0373\uFFFD\uFFFD")),
                this.state.baseData.map((item, index) => {
                    return React.createElement("div", { className: "option", key: index },
                        React.createElement("img", { src: item.img, width: "45px", height: "45px", style: { float: "left", marginTop: "3px" } }),
                        React.createElement("div", { style: { float: "left", marginLeft: "18px" } },
                            React.createElement("span", { className: "spanA" }, item.name),
                            React.createElement("br", null),
                            React.createElement("span", { className: "spanB" }, item.number),
                            React.createElement("span", { className: "spanC" }, item.unit)));
                }),
                React.createElement("div", { style: { color: "#FFFFFF", marginLeft: "35px" } },
                    React.createElement("div", { style: { fontSize: "12px", float: "left" } }, "\u0530\uFFFD\uFFFD\uFFFD\u00B4\uFFFD\uFFFD\uFFFDGDP"),
                    React.createElement("div", { style: { fontSize: "12px", marginLeft: "10px", float: "left" } }, "(\uFFFD\uFFFD\uFFFD\uFFFD)"),
                    React.createElement("div", { style: {
                            borderTop: "2px solid #07D1D3", width: "10px", height: "3px", float: "left", opacity: 1,
                            marginLeft: "50px", marginTop: "8px"
                        } }),
                    React.createElement("div", { style: { float: "left", fontSize: "6px", marginLeft: "5px" } }, "\uFFFD\uFFFD\u01F0\u05B5"),
                    React.createElement("div", { style: {
                            borderTop: "2px solid #229FCE", width: "10px", height: "3px", float: "left", opacity: 1,
                            marginLeft: "10px", marginTop: "8px"
                        } }),
                    React.createElement("div", { style: { float: "left", fontSize: "6px", marginLeft: "5px" } }, "\uFFFD\uFFFD\u05FC\u05B5")),
                React.createElement("div", { id: "curve", style: { width: "350px", height: "260px", marginLeft: "12px" } })));
        }
    }
    exports.default = BaseData;
});
define("data", ["require", "exports", "react", "react-router-dom", "g2plot", "css!./styles/data.css"], function (require, exports, React, react_router_dom_1, g2plot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Data extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidMount() {
            console.log("ddddddddddd");
            const data = [
                { year: '1991', value: 3 },
                { year: '1992', value: 4 },
                { year: '1993', value: 3.5 },
                { year: '1994', value: 5 },
                { year: '1995', value: 4.9 },
                { year: '1996', value: 6 },
                { year: '1997', value: 7 },
                { year: '1998', value: 9 },
                { year: '1999', value: 13 },
            ];
            const linePlot = new g2plot_1.Line('canvas', {
                data,
                xField: 'year',
                yField: 'value',
            });
            linePlot.render();
        }
        render() {
            return (React.createElement("div", { className: "data" },
                React.createElement("div", { className: "dataTop" },
                    React.createElement("div", { className: "dataTitle", style: { float: "left", marginLeft: "3%", marginTop: "-5`px", color: "#FFFFFF" } }, "\u6842\u6797\u4FE1\u606F\u4EA7\u4E1A\u56ED\u6570\u636E\u5206\u6790"),
                    React.createElement(react_router_dom_1.Link, { to: "/" },
                        React.createElement("div", { style: { float: "right", marginRight: "15px", color: "#FFFFFF" } },
                            React.createElement(Industry, null))),
                    React.createElement("div", { style: { border: "1px solid #A1D4CF", float: "right", height: "10px", marginTop: "50px", marginRight: "12px" } }),
                    React.createElement("div", { style: { fontSize: "15px", color: "#FFFFFF", float: "right", marginRight: "12px" } }, "12:10:20"),
                    React.createElement("div", { style: { border: "1px solid #A1D4CF", float: "right", height: "10px", marginTop: "50px", marginRight: "12px" } }),
                    React.createElement("div", { style: { color: "#FFFFFF", fontSize: "15px", float: "right", marginRight: "12px" } }, "20 \u00B0C"),
                    React.createElement("div", { style: { float: "right", marginRight: "3px" } },
                        React.createElement(Sun, null))),
                React.createElement("div", { id: "canvas" })));
        }
    }
    const Sun = () => React.createElement("svg", { className: "icon", "aria-hidden": "true" },
        React.createElement("use", { xlinkHref: "#iconyinzhuanqing" }));
    const Industry = () => React.createElement("svg", { className: "icon", "aria-hidden": "true" },
        React.createElement("use", { xlinkHref: "#iconhangye" }));
    exports.default = Data;
});
define("leftNav", ["require", "exports", "react", "antd", "css!./styles/listArea.css", "css!./styles/iconfont.css", "css!./styles/leftNav.css", "css!./styles/listArea.css"], function (require, exports, React, antd_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const { TreeNode } = antd_1.Tree;
    class IntroduceArea extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (React.createElement("div", { className: "introduceContent" },
                React.createElement("p", { className: "intrTit" }, "\u6842\u6797\u5E02\u4FE1\u606F\u4EA7\u4E1A\u56ED"),
                React.createElement("div", { className: "contentOne" },
                    React.createElement("p", { className: "rowOne" },
                        React.createElement("span", { className: "rowOnetit" },
                            React.createElement("span", { className: "iconfont", style: { "color": "#D50000", "fontSize": "20px", "paddingRight": "4px" } }, "\uE80D"),
                            "\u56ED\u533A\u6982\u51B5")),
                    React.createElement("div", { className: "pContent" },
                        React.createElement("p", null, "\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u521B\u610F\u4EA7\u4E1A\u56ED\u662F\u6842\u6797\u5E02\u5EFA\u8BBE\u6587\u5316\u521B\u610F\u4EA7\u4E1A\u3001\u8F6F\u4EF6\u3001\u52A8\u6F2B\u3001\u8BBE\u8BA1\u7684\u91CD\u8981\u652F\u6491\u9879\u76EE\uFF0C\u603B\u6295\u8D442.5\u4EBF\u5143\uFF0C\u7528\u5730117\u4EA9\uFF0C\u5EFA\u8BBE12.5\u4E07\u5E73\u65B9\u7C73\u7684\u8F6F\u4EF6\u4EA7\u4E1A\u529F\u80FD\u533A\uFF0C\u5305\u62EC\u8F6F\u4EF6\u5916\u5305\u3001\u8F6F\u4EF6\u7814\u53D1\u548C\u751F\u4EA7\u3001\u8F6F\u4EF6\u6D4B\u8BD5\u3001\u8F6F\u4EF6\u4EA7\u54C1\u5C55\u793A\u548C\u8425\u9500\u3001\u8F6F\u4EF6\u4EBA\u624D\u57F9\u8BAD\u4EE5\u53CA\u52A8\u6F2B\u7B56\u5212\u3001\u5236\u4F5C\u3001\u5EFA\u7B51\u8BBE\u8BA1\u3001\u5DE5\u4E1A\u8BBE\u8BA1\u3001\u73AF\u5883\u8BBE\u8BA1\u7B49\u8F6F\u4EF6\u3001\u52A8\u6F2B\u3001\u8BBE\u8BA1\u4E09\u5927\u529F\u80FD\u533A\u3002\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u521B\u610F\u4EA7\u4E1A\u56ED\u6574\u4F53\u5EFA\u6210\u540E\uFF0C\u9884\u8BA1\u5E74\u4EA7\u503C20\u4EBF\u5143\uFF0C\u5229\u7A0E1.5\u4EBF\u5143\uFF0C\u65B0\u589E\u5C31\u4E1A\u5C97\u4F4D6000\u4E2A\uFF0C\u5C06\u6210\u4E3A\u5728\u5E7F\u897F\u533A\u5185\u5177\u6709\u8F83\u5927\u5F71\u54CD\u529B\u7684\u542B\u8F6F\u4EF6\u3001\u52A8\u6F2B\u3001\u8BBE\u8BA1\u7684\u521B\u610F\u4EA7\u4E1A\u57FA\u5730\uFF0C\u5168\u9762\u63A8\u52A8\u672C\u5730\u7535\u5B50\u4FE1\u606F\u4EA7\u4E1A\u548C\u521B\u610F\u4EA7\u4E1A\u7684\u8054\u52A8\u53D1\u5C55\uFF0C\u4FC3\u8FDB\u6842\u6797\u5E02\u5DE5\u4E1A\u7ED3\u6784\u5347\u7EA7\u3002\u5BF9\u7B26\u5408\u6761\u4EF6\u7684\u5165\u9A7B\u4F01\u4E1A\uFF0C\u9664\u4EAB\u53D7\u56FD\u5BB6\u548C\u300A\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u5173\u4E8E\u52A0\u5FEB\u63A8\u8FDB\u521B\u610F\u4EA7\u4E1A\u53D1\u5C55\u7684\u82E5\u5E72\u63AA\u65BD\u300B\u4E2D\u7684\u653F\u7B56\u5916\uFF0C\u8FD8\u53EF\u4EAB\u53D7\u7A0E\u6536\u548C\u573A\u79DF\u7B49\u4F18\u60E0\u653F\u7B56\u3002"),
                        React.createElement("p", null, "\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u521B\u610F\u4EA7\u4E1A\u56ED\u662F\u6842\u6797\u5E02\u5EFA\u8BBE\u6587\u5316\u521B\u610F\u4EA7\u4E1A\u3001\u8F6F\u4EF6\u3001\u52A8\u6F2B\u3001\u8BBE\u8BA1\u7684\u91CD\u8981\u652F\u6491\u9879\u76EE\uFF0C\u603B\u6295\u8D442.5\u4EBF\u5143\uFF0C\u7528\u5730117\u4EA9\uFF0C\u5EFA\u8BBE12.5\u4E07\u5E73\u65B9\u7C73\u7684\u8F6F\u4EF6\u4EA7\u4E1A\u529F\u80FD\u533A\uFF0C\u5305\u62EC\u8F6F\u4EF6\u5916\u5305\u3001\u8F6F\u4EF6\u7814\u53D1\u548C\u751F\u4EA7\u3001\u8F6F\u4EF6\u6D4B\u8BD5\u3001\u8F6F\u4EF6\u4EA7\u54C1\u5C55\u793A\u548C\u8425\u9500\u3001\u8F6F\u4EF6\u4EBA\u624D\u57F9\u8BAD\u4EE5\u53CA\u52A8\u6F2B\u7B56\u5212\u3001\u5236\u4F5C\u3001\u5EFA\u7B51\u8BBE\u8BA1\u3001\u5DE5\u4E1A\u8BBE\u8BA1\u3001\u73AF\u5883\u8BBE\u8BA1\u7B49\u8F6F\u4EF6\u3001\u52A8\u6F2B\u3001\u8BBE\u8BA1\u4E09\u5927\u529F\u80FD\u533A\u3002\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u521B\u610F\u4EA7\u4E1A\u56ED\u6574\u4F53\u5EFA\u6210\u540E\uFF0C\u9884\u8BA1\u5E74\u4EA7\u503C20\u4EBF\u5143\uFF0C\u5229\u7A0E1.5\u4EBF\u5143\uFF0C\u65B0\u589E\u5C31\u4E1A\u5C97\u4F4D6000\u4E2A\uFF0C\u5C06\u6210\u4E3A\u5728\u5E7F\u897F\u533A\u5185\u5177\u6709\u8F83\u5927\u5F71\u54CD\u529B\u7684\u542B\u8F6F\u4EF6\u3001\u52A8\u6F2B\u3001\u8BBE\u8BA1\u7684\u521B\u610F\u4EA7\u4E1A\u57FA\u5730\uFF0C\u5168\u9762\u63A8\u52A8\u672C\u5730\u7535\u5B50\u4FE1\u606F\u4EA7\u4E1A\u548C\u521B\u610F\u4EA7\u4E1A\u7684\u8054\u52A8\u53D1\u5C55\uFF0C\u4FC3\u8FDB\u6842\u6797\u5E02\u5DE5\u4E1A\u7ED3\u6784\u5347\u7EA7\u3002\u5BF9\u7B26\u5408\u6761\u4EF6\u7684\u5165\u9A7B\u4F01\u4E1A\uFF0C\u9664\u4EAB\u53D7\u56FD\u5BB6\u548C\u300A\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u5173\u4E8E\u52A0\u5FEB\u63A8\u8FDB\u521B\u610F\u4EA7\u4E1A\u53D1\u5C55\u7684\u82E5\u5E72\u63AA\u65BD\u300B\u4E2D\u7684\u653F\u7B56\u5916\uFF0C\u8FD8\u53EF\u4EAB\u53D7\u7A0E\u6536\u548C\u573A\u79DF\u7B49\u4F18\u60E0\u653F\u7B56\u3002"))),
                React.createElement("div", { className: "contentTwo" },
                    React.createElement("p", { className: "rowOne" },
                        React.createElement("span", { className: "rowOnetit" },
                            React.createElement("span", { className: "iconfont", style: { "color": "#D50000", "fontSize": "20px", "paddingRight": "4px" } }, "\uE80D"),
                            "\u56ED\u533A\u98CE\u91C7")),
                    React.createElement("p", { className: "imgBox" },
                        React.createElement("img", { src: "./park/image/imgone1.png", style: { "padding": "0px 13px 0px 0px" } }),
                        React.createElement("img", { src: "./park/image/imgone2.png", style: { "padding": "0px 13px 0px 13px" } }),
                        React.createElement("img", { src: "./park/image/imgone3.png", style: { "padding": "0px 13px 0px 13px" } }),
                        React.createElement("img", { src: "./park/image/imgone4.png", style: { "padding": "0px 0px 0px 13px" } })))));
        }
    }
    class SuperiorityArea extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (React.createElement("div", { className: "introduceContent" },
                React.createElement("p", { className: "intrTit" }, "\u6842\u6797\u5E02\u4FE1\u606F\u4EA7\u4E1A\u56ED"),
                React.createElement("div", { className: "contentOne" },
                    React.createElement("p", { className: "rowOne" },
                        React.createElement("span", { className: "rowOnetit" },
                            React.createElement("span", { className: "iconfont", style: { "color": "#D50000", "fontSize": "20px", "paddingRight": "4px" } }, "\uE80D"),
                            "\u533A\u4F4D\u4F18\u52BF")),
                    React.createElement("div", { className: "pContent" },
                        React.createElement("p", null, "\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u521B\u610F\u4EA7\u4E1A\u56ED\u662F\u6842\u6797\u5E02\u5EFA\u8BBE\u6587\u5316\u521B\u610F\u4EA7\u4E1A\u3001\u8F6F\u4EF6\u3001\u52A8\u6F2B\u3001\u8BBE\u8BA1\u7684\u91CD\u8981\u652F\u6491\u9879\u76EE\uFF0C\u603B\u6295\u8D442.5\u4EBF\u5143\uFF0C\u7528\u5730117\u4EA9\uFF0C\u5EFA\u8BBE12.5\u4E07\u5E73\u65B9\u7C73\u7684\u8F6F\u4EF6\u4EA7\u4E1A\u529F\u80FD\u533A\uFF0C\u5305\u62EC\u8F6F\u4EF6\u5916\u5305\u3001\u8F6F\u4EF6\u7814\u53D1\u548C\u751F\u4EA7\u3001\u8F6F\u4EF6\u6D4B\u8BD5\u3001\u8F6F\u4EF6\u4EA7\u54C1\u5C55\u793A\u548C\u8425\u9500\u3001\u8F6F\u4EF6\u4EBA\u624D\u57F9\u8BAD\u4EE5\u53CA\u52A8\u6F2B\u7B56\u5212\u3001\u5236\u4F5C\u3001\u5EFA\u7B51\u8BBE\u8BA1\u3001\u5DE5\u4E1A\u8BBE\u8BA1\u3001\u73AF\u5883\u8BBE\u8BA1\u7B49\u8F6F\u4EF6\u3001\u52A8\u6F2B\u3001\u8BBE\u8BA1\u4E09\u5927\u529F\u80FD\u533A\u3002\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u521B\u610F\u4EA7\u4E1A\u56ED\u6574\u4F53\u5EFA\u6210\u540E\uFF0C\u9884\u8BA1\u5E74\u4EA7\u503C20\u4EBF\u5143\uFF0C\u5229\u7A0E1.5\u4EBF\u5143\uFF0C\u65B0\u589E\u5C31\u4E1A\u5C97\u4F4D6000\u4E2A\uFF0C\u5C06\u6210\u4E3A\u5728\u5E7F\u897F\u533A\u5185\u5177\u6709\u8F83\u5927\u5F71\u54CD\u529B\u7684\u542B\u8F6F\u4EF6\u3001\u52A8\u6F2B\u3001\u8BBE\u8BA1\u7684\u521B\u610F\u4EA7\u4E1A\u57FA\u5730\uFF0C\u5168\u9762\u63A8\u52A8\u672C\u5730\u7535\u5B50\u4FE1\u606F\u4EA7\u4E1A\u548C\u521B\u610F\u4EA7\u4E1A\u7684\u8054\u52A8\u53D1\u5C55\uFF0C\u4FC3\u8FDB\u6842\u6797\u5E02\u5DE5\u4E1A\u7ED3\u6784\u5347\u7EA7\u3002\u5BF9\u7B26\u5408\u6761\u4EF6\u7684\u5165\u9A7B\u4F01\u4E1A\uFF0C\u9664\u4EAB\u53D7\u56FD\u5BB6\u548C\u300A\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u5173\u4E8E\u52A0\u5FEB\u63A8\u8FDB\u521B\u610F\u4EA7\u4E1A\u53D1\u5C55\u7684\u82E5\u5E72\u63AA\u65BD\u300B\u4E2D\u7684\u653F\u7B56\u5916\uFF0C\u8FD8\u53EF\u4EAB\u53D7\u7A0E\u6536\u548C\u573A\u79DF\u7B49\u4F18\u60E0\u653F\u7B56\u3002"),
                        React.createElement("p", null, "\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u521B\u610F\u4EA7\u4E1A\u56ED\u662F\u6842\u6797\u5E02\u5EFA\u8BBE\u6587\u5316\u521B\u610F\u4EA7\u4E1A\u3001\u8F6F\u4EF6\u3001\u52A8\u6F2B\u3001\u8BBE\u8BA1\u7684\u91CD\u8981\u652F\u6491\u9879\u76EE\uFF0C\u603B\u6295\u8D442.5\u4EBF\u5143\uFF0C\u7528\u5730117\u4EA9\uFF0C\u5EFA\u8BBE12.5\u4E07\u5E73\u65B9\u7C73\u7684\u8F6F\u4EF6\u4EA7\u4E1A\u529F\u80FD\u533A\uFF0C\u5305\u62EC\u8F6F\u4EF6\u5916\u5305\u3001\u8F6F\u4EF6\u7814\u53D1\u548C\u751F\u4EA7\u3001\u8F6F\u4EF6\u6D4B\u8BD5\u3001\u8F6F\u4EF6\u4EA7\u54C1\u5C55\u793A\u548C\u8425\u9500\u3001\u8F6F\u4EF6\u4EBA\u624D\u57F9\u8BAD\u4EE5\u53CA\u52A8\u6F2B\u7B56\u5212\u3001\u5236\u4F5C\u3001\u5EFA\u7B51\u8BBE\u8BA1\u3001\u5DE5\u4E1A\u8BBE\u8BA1\u3001\u73AF\u5883\u8BBE\u8BA1\u7B49\u8F6F\u4EF6\u3001\u52A8\u6F2B\u3001\u8BBE\u8BA1\u4E09\u5927\u529F\u80FD\u533A\u3002\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u521B\u610F\u4EA7\u4E1A\u56ED\u6574\u4F53\u5EFA\u6210\u540E\uFF0C\u9884\u8BA1\u5E74\u4EA7\u503C20\u4EBF\u5143\uFF0C\u5229\u7A0E1.5\u4EBF\u5143\uFF0C\u65B0\u589E\u5C31\u4E1A\u5C97\u4F4D6000\u4E2A\uFF0C\u5C06\u6210\u4E3A\u5728\u5E7F\u897F\u533A\u5185\u5177\u6709\u8F83\u5927\u5F71\u54CD\u529B\u7684\u542B\u8F6F\u4EF6\u3001\u52A8\u6F2B\u3001\u8BBE\u8BA1\u7684\u521B\u610F\u4EA7\u4E1A\u57FA\u5730\uFF0C\u5168\u9762\u63A8\u52A8\u672C\u5730\u7535\u5B50\u4FE1\u606F\u4EA7\u4E1A\u548C\u521B\u610F\u4EA7\u4E1A\u7684\u8054\u52A8\u53D1\u5C55\uFF0C\u4FC3\u8FDB\u6842\u6797\u5E02\u5DE5\u4E1A\u7ED3\u6784\u5347\u7EA7\u3002\u5BF9\u7B26\u5408\u6761\u4EF6\u7684\u5165\u9A7B\u4F01\u4E1A\uFF0C\u9664\u4EAB\u53D7\u56FD\u5BB6\u548C\u300A\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u5173\u4E8E\u52A0\u5FEB\u63A8\u8FDB\u521B\u610F\u4EA7\u4E1A\u53D1\u5C55\u7684\u82E5\u5E72\u63AA\u65BD\u300B\u4E2D\u7684\u653F\u7B56\u5916\uFF0C\u8FD8\u53EF\u4EAB\u53D7\u7A0E\u6536\u548C\u573A\u79DF\u7B49\u4F18\u60E0\u653F\u7B56\u3002")),
                    React.createElement("p", null,
                        React.createElement("img", { src: "./park/image/imgmap1.png", style: { "paddingTop": "13px" } })))));
        }
    }
    class ListArea extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                index: 99,
                show: null,
                introduce: false,
                superiority: false,
                listArea: false,
                showBusiness: false,
                showCompany: false,
                treeList: false,
                equipmentList: [
                    {
                        "equipmentType": "IDC可视化监控系统",
                        "equipmentID": "1",
                        "buildList": [
                            {
                                "buildname": "A座",
                                "areaList": [
                                    {
                                        "areaName": "A区",
                                        "floorList": [
                                            {
                                                "floorName": "A-1F",
                                                "equipments": [
                                                    { "equipmentName": "机房1-A组列头柜" },
                                                    { "equipmentName": "机房1-B组列头柜" },
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "areaName": "B区",
                                        "floorList": [
                                            {
                                                "floorName": "B-1F",
                                                "equipments": [
                                                    { "equipmentName": "机房1-A组列头柜" },
                                                    { "equipmentName": "机房1-B组列头柜" },
                                                ]
                                            }
                                        ]
                                    },
                                ]
                            }
                        ]
                    }
                ],
                industryTypes: [
                    {
                        "typeName": "文化创意",
                        "typeID": "1",
                    },
                    {
                        "typeName": "金融保险",
                        "typeID": "2",
                    },
                    {
                        "typeName": "科技服务",
                        "typeID": "3",
                    },
                    {
                        "typeName": "高新技术",
                        "typeID": "4",
                    },
                    {
                        "typeName": "电子产业",
                        "typeID": "5",
                    },
                    {
                        "typeName": "电子商务",
                        "typeID": "6",
                    }
                ],
                roomList: [
                    {
                        "roomID": "id-A座-4F-B411",
                        "roomName": "A座-4F-B411",
                        "roomArea": "51",
                        "addTime": "2019-7-11",
                    },
                    {
                        "roomID": "id-A座-4F-B412",
                        "roomName": "A座-4F-B412",
                        "roomArea": "52",
                        "addTime": "2019-7-15",
                    },
                ],
                companyList: [
                    {
                        "companyID": "id-浙江永拓信息科技有限公司",
                        "companyName": "浙江永拓信息科技有限公司",
                        "address": "E座B区-3F-301",
                        "type": "科技服务"
                    },
                    {
                        "companyID": "id-桂林银行",
                        "companyName": "桂林银行",
                        "address": "A座A区-1F-101",
                        "type": "金融保险"
                    },
                ],
            };
            this.getRoom = this.getRoom.bind(this);
            this.getCompany = this.getCompany.bind(this);
        }
        componentDidupdate() {
        }
        componentDidMount() {
            this.props.onRef(this);
        }
        onSelect(selectedKeys, info) {
            console.log('selected', selectedKeys[0]);
        }
        ;
        onExpand() {
            console.log('Trigger Expand');
        }
        ;
        myindex(index) {
            console.log('child', index);
            if (index == 1) {
                this.setState({
                    show: "one",
                    introduce: true,
                    superiority: false,
                    listArea: false,
                    showBusiness: true,
                    showCompany: false,
                    treeList: false,
                });
            }
            else if (index == 2) {
                this.setState({
                    show: "two",
                    introduce: false,
                    superiority: true,
                    listArea: false,
                    showBusiness: true,
                    showCompany: false,
                    treeList: false,
                });
            }
            else if (index == 3) {
                this.setState({
                    show: "three",
                    introduce: false,
                    superiority: false,
                    listArea: true,
                    showBusiness: true,
                    showCompany: false,
                    treeList: false,
                });
            }
            else if (index == 4) {
                this.setState({
                    show: "four",
                    introduce: false,
                    superiority: false,
                    listArea: true,
                    showBusiness: false,
                    showCompany: true,
                    treeList: false,
                });
            }
            else if (index == 10) {
                this.setState({
                    show: "ten",
                    introduce: false,
                    superiority: false,
                    listArea: false,
                    showBusiness: false,
                    showCompany: false,
                    treeList: true,
                });
            }
            else {
                this.setState({
                    show: "no ",
                    introduce: false,
                    superiority: false,
                    listArea: false,
                    treeList: false,
                });
            }
        }
        clickFun(a) {
            this.props.indexC(a);
            this.setState({
                index: 99,
                introduce: false,
                superiority: false,
                listArea: false,
                treeList: false,
            });
        }
        getRoom(event) {
            const id = event.target.getAttribute("data-id");
            console.log('getRoom', id);
        }
        getCompany(event) {
            const id = event.target.getAttribute("data-id");
            console.log('getCompany', id);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: this.state.introduce == true ? "introduce" : "hide" },
                    React.createElement("div", { className: "topTit" },
                        React.createElement("img", { src: "./park/image/banner1.png", className: "banner1" }),
                        React.createElement("div", { className: "topSpan" },
                            React.createElement("p", { className: "introduceBG" }),
                            React.createElement("span", { className: "topTTW" }, "\u56ED\u533A\u4ECB\u7ECD"),
                            React.createElement("span", { className: "introduceClose", onClick: this.clickFun.bind(this, this.state.index) },
                                React.createElement("span", { className: "iconfont", style: { "fontSize": "12px" } }, "\uE803")))),
                    React.createElement(IntroduceArea, null)),
                React.createElement("div", { className: this.state.superiority == true ? "introduce" : "hide" },
                    React.createElement("div", { className: "topTit" },
                        React.createElement("img", { src: "./park/image/banner1.png", className: "banner1" }),
                        React.createElement("div", { className: "topSpan" },
                            React.createElement("p", { className: "introduceBG" }),
                            React.createElement("span", { className: "topTTW" }, "\u533A\u4F4D\u4F18\u52BF"),
                            React.createElement("span", { className: "introduceClose", onClick: this.clickFun.bind(this, this.state.index) },
                                React.createElement("span", { className: "iconfont", style: { "fontSize": "12px" } }, "\uE803")))),
                    React.createElement(SuperiorityArea, null)),
                React.createElement("div", { className: this.state.listArea == true ? "listArea" : "hide" },
                    React.createElement("div", { className: this.state.showBusiness == true ? "show" : "hide" },
                        React.createElement("div", { className: "topTit" },
                            React.createElement("span", { className: "topTT" }, "\u62DB\u5546\u5217\u8868"),
                            React.createElement("span", { className: "listAreaClose", onClick: this.clickFun.bind(this, this.state.index) },
                                React.createElement("span", { className: "iconfont", style: { "fontSize": "12px" } }, "\uE803"))),
                        React.createElement("div", { className: "areaScope" },
                            React.createElement("p", { className: "areaScopeP" }, "\u7B5B\u9009\uFF08\u9762\u79EF\uFF09"),
                            React.createElement("ul", null,
                                React.createElement("li", null, "\u5168\u90E8"),
                                React.createElement("li", null, "100m\u4EE5\u4E0B"),
                                React.createElement("li", null, "100-200m"),
                                React.createElement("li", null, "200-300m"),
                                React.createElement("li", null, "300-500m"),
                                React.createElement("li", null, "500-1000m"),
                                React.createElement("li", null, "1000-2000m"),
                                React.createElement("li", null, "2000m\u4EE5\u4E0B"))),
                        React.createElement("div", { className: "roomList" },
                            React.createElement("ul", null, this.state.roomList.map((i, index) => {
                                return (React.createElement("li", { className: "roomP" },
                                    React.createElement("p", { onClick: this.getRoom, "data-id": i.roomID }, i.roomName),
                                    React.createElement("p", { onClick: this.getRoom, "data-id": i.roomID },
                                        React.createElement("span", { className: "icontop3" },
                                            React.createElement("span", { className: "iconfont" }, "\uE805")),
                                        "\u00A0 \u623F\u95F4\u9762\u79EF\uFF1A",
                                        React.createElement("span", { onClick: this.getRoom, "data-id": i.roomID },
                                            i.roomArea,
                                            " m\u00B2")),
                                    React.createElement("p", { onClick: this.getRoom, "data-id": i.roomID },
                                        React.createElement("span", { className: "icontop3" },
                                            React.createElement("span", { className: "iconfont" }, "\uE806")),
                                        "\u00A0 \u53D1\u5E03\u65F6\u95F4\uFF1A",
                                        React.createElement("span", null,
                                            i.addTime,
                                            " "))));
                            })))),
                    React.createElement("div", { className: this.state.showCompany == true ? "show" : "hide" },
                        React.createElement("div", { className: "topTit" },
                            React.createElement("span", { className: "topTT" }, "\u5165\u9A7B\u4F01\u4E1A"),
                            React.createElement("span", { className: "listAreaClose", onClick: this.clickFun.bind(this, this.state.index) },
                                React.createElement("span", { className: "iconfont", style: { "fontSize": "12px" } }, "\uE803"))),
                        React.createElement("div", { className: "areaScopeqy" },
                            React.createElement("p", { className: "areaScopeP" }, "\u4F01\u4E1A\u5206\u7C7B"),
                            React.createElement("ul", null,
                                React.createElement("li", null, "\u5168\u90E8"),
                                this.state.industryTypes.map((i, index) => {
                                    return (React.createElement("li", null, i.typeName));
                                }))),
                        React.createElement("div", { className: "roomList" },
                            React.createElement("ul", null, this.state.companyList.map((i, index) => {
                                return (React.createElement("li", { className: "roomP" },
                                    React.createElement("p", { onClick: this.getCompany, "data-id": i.companyID }, i.companyName),
                                    React.createElement("p", { onClick: this.getCompany, "data-id": i.companyID },
                                        React.createElement("span", { className: "icontop3" },
                                            React.createElement("span", { className: "iconfont" }, "\uE807")),
                                        "\u00A0\u516C\u53F8\u4F4D\u7F6E\uFF1A",
                                        React.createElement("span", { onClick: this.getCompany, "data-id": i.companyID }, i.address)),
                                    React.createElement("p", { onClick: this.getCompany, "data-id": i.companyID },
                                        React.createElement("span", { className: "icontop3" },
                                            React.createElement("span", { className: "iconfont" }, "\uE808")),
                                        "\u00A0\u6240\u5C5E\u884C\u4E1A\uFF1A",
                                        React.createElement("span", null, i.type))));
                            }))))),
                React.createElement("div", { className: this.state.treeList == true ? "treeList" : "hide" },
                    React.createElement("div", { className: "topTittree" },
                        React.createElement("span", { className: "topTT" }, "\u6842\u6797\u4FE1\u606F\u4EA7\u4E1A\u56ED"),
                        React.createElement("span", { className: "treeClose", onClick: this.clickFun.bind(this, this.state.index) },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "12px" } }, "\uE803"))),
                    React.createElement("div", { className: "treenode" },
                        React.createElement(antd_1.Tree, { showLine: true, switcherIcon: React.createElement(antd_1.Icon, { type: "down" }), defaultExpandedKeys: ['0-0-0'], onSelect: this.onSelect }, this.state.equipmentList.map((i, index) => {
                            return (React.createElement(TreeNode, { title: i.equipmentType, key: i.equipmentType }, i.buildList.map((it, index) => {
                                return (React.createElement(TreeNode, { title: it.buildname, key: it.buildname }, it.areaList.map((ite, index) => {
                                    return (React.createElement(TreeNode, { title: ite.areaName, key: ite.areaName }, ite.floorList.map((ites, index) => {
                                        return (React.createElement(TreeNode, { title: ites.floorName, key: ites.floorName }, ites.equipments.map((iteg, index) => {
                                            return (React.createElement(TreeNode, { title: iteg.equipmentName, key: iteg.equipmentName }));
                                        })));
                                    })));
                                })));
                            })));
                        }))))));
        }
    }
    class LeftNav extends React.Component {
        constructor(props) {
            super(props);
            this.onRef = (ref) => {
                console.log("onRefref", ref);
                this.child = ref;
            };
            this.child = null;
            this.state = {
                index: 99,
                iconone: false,
                icontwo: false,
                iconthree: false,
                iconfour: false,
                aIcon: [
                    { "iconone": false },
                    { "icontwo": false },
                    { "iconthree": false },
                    { "iconfour": false },
                ]
            };
            this.indexC = this.indexC.bind(this);
        }
        componentDidMount() {
            this.props.leftNavFather(this);
        }
        getValuefromChild(a) {
            console.log("leftnav", a);
        }
        ;
        showList(index) {
            console.log('father2', index);
            if (index == 1) {
                this.setState({
                    index: index,
                    iconone: true,
                    icontwo: false,
                    iconthree: false,
                    iconfour: false,
                });
                this.child.myindex(index);
            }
            else if (index == 2) {
                this.setState({
                    index: index,
                    iconone: false,
                    icontwo: true,
                    iconthree: false,
                    iconfour: false,
                });
                this.child.myindex(index);
            }
            else if (index == 3) {
                this.setState({
                    index: index,
                    iconone: false,
                    icontwo: false,
                    iconthree: true,
                    iconfour: false,
                });
                this.child.myindex(index);
            }
            else if (index == 4) {
                this.setState({
                    index: index,
                    iconone: false,
                    icontwo: false,
                    iconthree: false,
                    iconfour: true,
                });
                this.child.myindex(index);
            }
            else if (index == 10) {
                this.setState({
                    index: index,
                    iconone: false,
                    icontwo: false,
                    iconthree: false,
                    iconfour: false,
                });
                this.child.myindex(index);
            }
        }
        indexC(index) {
            console.log("indexC", index);
            this.setState({
                index: index
            });
        }
        indexCh(a) {
            console.log("indexCh", a);
            if (a == 99) {
                this.setState({
                    index: a,
                    iconone: false,
                    icontwo: false,
                    iconthree: false,
                    iconfour: false,
                });
            }
            else {
                this.setState({
                    index: a,
                });
            }
        }
        render() {
            console.log(this.state);
            return (React.createElement("div", null,
                React.createElement("div", { className: "tree", onClick: this.showList.bind(this, 10) },
                    React.createElement("div", { className: "stree" },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "14px" } }, "\uE809"),
                        "\u00A0 \u6842\u6797\u4FE1\u606F\u4EA7\u4E1A\u56ED")),
                React.createElement("div", { className: "leftNav" },
                    React.createElement("div", { className: "leftBG" }),
                    React.createElement("ul", { className: "leftul" },
                        React.createElement("li", { onClick: this.showList.bind(this, 1), className: this.state.iconone == true ? "iconit" : "iconun" },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "25px" } }, "\uE7FA"),
                            React.createElement("p", null, "\u56ED\u533A\u4ECB\u7ECD")),
                        React.createElement("li", { onClick: this.showList.bind(this, 2), className: this.state.icontwo == true ? "iconit" : "iconun" },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "25px" } }, "\uE7FB"),
                            React.createElement("p", null, "\u533A\u57DF\u4F18\u52BF")),
                        React.createElement("li", { onClick: this.showList.bind(this, 3), className: this.state.iconthree == true ? "iconit" : "iconun" },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "25px" } }, "\uE7FC"),
                            React.createElement("p", null, "\u62DB\u5546\u5217\u8868")),
                        React.createElement("li", { onClick: this.showList.bind(this, 4), className: this.state.iconfour == true ? "iconit" : "iconun" },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "25px" } }, "\uE7FD"),
                            React.createElement("p", null, "\u5165\u9A7B\u4F01\u4E1A")))),
                React.createElement(ListArea, { index: this.state.index, indexC: this.indexCh.bind(this), onRef: this.onRef })));
        }
    }
    exports.default = LeftNav;
});
define("topNav", ["require", "exports", "react", "css!./styles/topnav.css"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TopNav extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidMount() {
            this.props.topNavFather(this);
        }
        getValuefromChild(a) {
            console.log("topnav", a);
        }
        ;
        render() {
            return (React.createElement("div", { className: "topNav" },
                React.createElement("div", { className: "topLogo" },
                    React.createElement("img", { src: "./park/image/logo.png" })),
                React.createElement("div", { className: "topM" },
                    React.createElement("ul", null,
                        React.createElement("li", null, "\u9996\u9875"),
                        React.createElement("li", null, "\u56ED\u533A"),
                        React.createElement("li", null, "\u571F\u5730"),
                        React.createElement("li", null, "\u5382\u623F"),
                        React.createElement("li", null, "\u5199\u5B57\u697C"),
                        React.createElement("li", null, "\u5546\u4E1A"),
                        React.createElement("li", null,
                            "\u5176\u4ED6",
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "10px" } }, "\uE804")))),
                React.createElement("div", { className: "topRight" },
                    React.createElement("span", { style: { "marginRight": "5px" } }, "\u6D59\u6C5F\u6C38\u62D3\u4FE1\u606F\u79D1\u6280"),
                    React.createElement("span", null, "\u767B\u5F55 "),
                    " | ",
                    React.createElement("span", null, " \u6CE8\u518C")),
                React.createElement("div", { className: "bottomNav" })));
        }
    }
    exports.default = TopNav;
});
define("Index", ["require", "exports", "react", "react-dom", "react-router-dom", "topNav", "leftNav", "iconView", "data", "css!./styles/index.css"], function (require, exports, React, ReactDOM, RouterDOM, topNav_1, leftNav_1, iconView_1, data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Index extends React.Component {
        constructor(props) {
            super(props);
            this.toggleShare = (e) => {
                this.setState({ isShare: !this.state.isShare });
            };
            this.fullScreen = (e) => {
                this.setState({ isFullScreen: !this.state.isFullScreen });
            };
            this.state = {
                isShare: false,
                isFullScreen: false,
            };
            this.deo = new Deo();
            this.topNavSon = ref => { this.topNavChild = ref; };
            this.leftNavSon = ref => { this.leftNavChild = ref; };
            this.btnClick = (a) => {
                this.topNavChild.getValuefromChild(a);
            };
            this.toggleShare = this.toggleShare.bind(this);
            Index.g_pIns = this;
        }
        sw(a) {
            console.log(this);
            this.deo.sdeo(a);
            this.btnClick(a);
        }
        render() {
            return (React.createElement("div", { className: "web" },
                this.state.isFullScreen ? null :
                    React.createElement("span", null,
                        React.createElement(topNav_1.default, { topNavFather: this.topNavSon }),
                        React.createElement(leftNav_1.default, { leftNavFather: this.leftNavSon })),
                React.createElement("div", { className: "iconView" },
                    React.createElement(iconView_1.default, null)),
                React.createElement(RouterDOM.Switch, null,
                    React.createElement(RouterDOM.Route, { exact: true, path: "/data", component: data_1.default }))));
        }
    }
    Index.g_pIns = null;
    class Deo {
        sdeo(e) {
            console.log("Deo", e);
        }
        ;
    }
    ReactDOM.render(React.createElement(RouterDOM.HashRouter, null,
        React.createElement(Index, null)), document.getElementById('viewContainer'));
    exports.default = Index;
});
define("iconView", ["require", "exports", "react", "react-router-dom", "css!./styles/iconView.css"], function (require, exports, React, RouterDOM) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class IconView extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isPlaying: false,
                isControls: true,
                audioArray: [
                    'https://eb-sycdn.kuwo.cn/ad367daf58355b6e9006e8b44a61057d/5e1d18eb/resource/n1/96/98/1578806792.mp3',
                    'https://win-web-ri01-sycdn.kuwo.cn/5b05672e4e9f39f61178ba25a8b913b0/5e1d1918/resource/n1/73/40/4073043717.mp3',
                    'https://win-web-re01-sycdn.kuwo.cn/f9cea19f40dc54473bd09c916aa9e312/5e1d1936/resource/n2/69/33/1625071345.mp3'
                ],
                currentAudio: 0
            };
            this.play = this.play.bind(this);
            this.endedAudio = this.endedAudio.bind(this);
        }
        endedAudio() {
            let currentAudio = this.state.currentAudio;
            if (currentAudio !== 2) {
                currentAudio = currentAudio + 1;
            }
            else {
                currentAudio = 0;
            }
            this.setState({
                currentAudio: currentAudio,
                isPlaying: false
            }, () => {
                this.setState({ isPlaying: true });
            });
        }
        play() {
            console.log("play");
            this.setState({ isPlaying: !this.state.isPlaying });
        }
        render() {
            return (React.createElement("div", { className: "icon-view " },
                React.createElement("div", { style: { position: "fixed", top: "300px", left: "500px" } }),
                React.createElement(RouterDOM.Link, { to: "/data" },
                    React.createElement(Analyze, null)),
                React.createElement("span", { onClick: this.play },
                    React.createElement(Play, null)),
                React.createElement("span", null,
                    React.createElement(Share, null)),
                React.createElement("span", null,
                    React.createElement(Amplification, null))));
        }
    }
    const Analyze = () => React.createElement("svg", { className: "icon", "aria-hidden": "true", style: { height: "17px", width: "17px", cursor: "pointer", color: "#FFFFFF" } },
        React.createElement("use", { xlinkHref: "#iconfenxi" }));
    const Play = () => React.createElement("svg", { className: "icon", "aria-hidden": "true", style: { height: "17px", width: "17px", marginLeft: "22px", cursor: "pointer", color: "#FFFFFF" } },
        React.createElement("use", { xlinkHref: "#iconbofang" }));
    const Share = () => React.createElement("svg", { className: "icon", "aria-hidden": "true", style: { height: "17px", width: "17px", marginLeft: "22px", cursor: "pointer", color: "#FFFFFF" } },
        React.createElement("use", { xlinkHref: "#iconfenxiang" }));
    const Switch = () => React.createElement("svg", { className: "icon", "aria-hidden": "true", style: { height: "17px", width: "17px", marginLeft: "22px", cursor: "pointer", color: "#FFFFFF" } },
        React.createElement("use", { xlinkHref: "#iconD" }));
    const Amplification = () => React.createElement("svg", { className: "icon", "aria-hidden": "true", style: { height: "17px", width: "17px", marginLeft: "22px", cursor: "pointer", color: "#FFFFFF" } },
        React.createElement("use", { xlinkHref: "#iconmengbanzu" }));
    exports.default = IconView;
});


const html = `<html>
<style>
body {
    margin: 0;
    background: #151f28;
}

#chartContainer {
    width: 100%;
    height: 100%;
    border: 0;
    background: #151f28;
    position: relative;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

#chartContainer>* {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.loader {
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader img {
    height: 14px;
    width: 128px;
    margin-top: -30px;
}

#chartWindow {
    width: 100%;
    height: 100%;
    border: 0;
}

iframe:not(.loaded) {
    opacity: 0;
}

iframe.loaded {
    transition: all 0.25s linear;
    opacity: 1;
}
</style>

<body>
<div id="chartContainer">
    <div class='loader'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
            <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
                <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
                <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
            </path>
        </svg>
    </div>
</div>
</body>
</html>`;

const script = `(function(){
//  setTimeout(()=>{
    window.postMessage('--- start script');
//  }, 5000);
//   const stringify = (o) => JSON.stringify(o, null, '\\t');

//   window.selectedSecurity = 'AAPL';
//   window.chartControl = [];
//   window.securities = [];
//   window.initializedSecurities = [];

//   window.setChartHandlers = (
//       saveLayout, saveDrawings, restoreExternalDrawings,
//       restorePreferences, restoreExternalLayout
//   ) => {
//       window.postMessage('--- setChartHandlers');
//   };

//   window.chartHandler = (chartAction, chartData) => {
//       window.postMessage('--- chartHandler');
//   }

//   const iframeOnload = (iframe) => {
//     if (!iframe.src.includes(selectedSecurity)) {
//         return;
//     }
//     iframe.classList.add('loaded');
//     document.querySelector('.loader').style.display = 'none';
//     window.postMessage('--- iframe loaded');
//   };

//   const loadIframe = () => {
//     window.postMessage('--- load iframe');
//     var iframe = document.createElement('iframe');
//     iframe.src = "https://test.letbob.com/chartiq/chart.html#" + window.selectedSecurity;
//     iframe.onload = iframeOnload;
//     iframe.allowtransparency = true;
//     document.querySelector('#chartContainer').appendChild(iframe);
//   };

//   document.readyState !== "loading"
//     ? loadIframe()
//     : document.addEventListener("DOMContentLoaded", loadIframe);

})()`;

export {
    html, script
};
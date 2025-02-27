// quickLinksComponent.js

export function QuickLinksWindow(options = {}) {

    //定義連結中路徑是否加入project/
    const { basePath = 'project/' } = options;
    const createLink = (href, text) => `<a href="${basePath}${href}">${text}</a>`;
    const indexLink = (href, text) => `<a href="${href}" >${text}</a>`;
    // 定義 CSS 樣式
    const style = `
        /* 快速鏈接窗口的基本樣式 */
        .quick-links-window {
            position: fixed;
            top: 20px;
            left: 20px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 15px;
            max-width: 300px;
            transition: transform 0.3s ease-in-out;
            z-index: 1000;
        }

        /* 收縮狀態的樣式 */
        .quick-links-window.collapsed {
            transform: translateX(-10px);
            top: 30px;
            width: 6px;
            overflow: hidden;
        }

        /* 隱藏收縮狀態下的標題和鏈接 */
        .quick-links-window.collapsed h2,
        .quick-links-window.collapsed .quick-links {
            display: none;
        }

        /* 切換按鈕的樣式 */
        .toggle-btn {
            position: absolute;
            top: 10px;
            right: -30px;
            background-color: #4b5d56;
            color: white;
            border: none;
            border-radius: 0 5px 5px 0;
            padding: 5px 10px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        /* 收縮狀態下切換按鈕的位置 */
        .quick-links-window.collapsed .toggle-btn {
            left: 2px;
            top: 2px;
            right: auto;
        }

        /* 切換按鈕懸停效果 */
        .toggle-btn:hover {
            background-color: #c5ae7c;
        }

        /* 標題樣式 */
        .quick-links-window h2 {
            font-size: 18px;
            margin-bottom: 10px;
            color: #4b5d56;
        }

        /* 鏈接網格布局 */
        .link-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }

        /* 鏈接區塊標題樣式 */
        .link-section h4 {
            font-size: 14px;
            margin-bottom: 5px;
            color: #4b5d56;
        }

        /* 鏈接列表樣式 */
        .quick-links ul {
            padding-left: 15px;
        }

        .quick-links li {
            margin-bottom: 3px;
        }

        /* 鏈接樣式 */
        .quick-links a {
            font-size: 12px;
            padding: 2px 4px;
            color: #4b5d56;
            background-color: #ece3d9;
            text-decoration: none;
            border-radius: 3px;
            transition: all 0.3s;
            display: inline-block;
            animation: linkBounce 1.5s ease-in-out infinite alternate;
        }

        /* 鏈接動畫效果 */
        @keyframes linkBounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-2px);
            }
        }

        /* 鏈接懸停效果 */
        .quick-links a:hover {
            color: #ffffff;
            background-color: #c5ae7c;
        }
    `;

    // 定義 HTML 結構
    const html = `
        <div class="quick-links-window">
            <button class="toggle-btn">◀</button>
            <h2>Quick Links</h2>
            <div class="quick-links">
                <div class="link-grid">
                    <div class="link-section">
                            <li><a href="https://liu092111.github.io/eng">Home</a></li>
                            <li><a href="https://liu092111.github.io/">中文網頁首頁</a></li>
                    </div>
                    <div class="link-section">
                        <h4>Internship</h4>
                        <ul>
                            <li>${createLink('reliability.html', 'Reliability Test, FEA (2023)')}</li>
                        </ul>
                    </div>
                    <div class="link-section">
                        <h4>Research</h4>
                        <ul>
                            <li>${createLink('university_project.html', 'Vibration Control (2023)')}</li>
                        </ul>
                    </div>
                    <div class="link-section">
                        <h4>Project</h4>
                        <ul>
                            <li>${createLink('robot design.html', 'Robot Design (2023)')}</li>
                            <li>${createLink('mechanical_design.html', 'Mechanical Design (2022)')}</li>
                        </ul>
                    </div>
                    <div class="link-section">
                        <h4>Fundamental Knowledge</h4>
                        <ul>
                            <li>${createLink('numerical_analysis.html', 'Numerical Analysis (2023)')}</li>    
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;


    // 創建樣式元素並添加到文檔頭部
    const styleElement = document.createElement('style');
    styleElement.textContent = style;
    document.head.appendChild(styleElement);

    // 創建快速鏈接窗口元素並添加到文檔主體
    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container.firstElementChild);

    // 添加收縮和展開功能
    const quickLinksWindow = document.querySelector('.quick-links-window');
    const toggleBtn = document.querySelector('.toggle-btn');
    toggleBtn.addEventListener('click', () => {
        quickLinksWindow.classList.toggle('collapsed');
        toggleBtn.textContent = quickLinksWindow.classList.contains('collapsed') ? '▶' : '◀';
    });
}
////// 需求：请尝试使用该 html，通过 js 来创建 dom，实现一个简易的加法计算器

// 获取main这个div
let main = document.querySelector(".main");

// 检查是否已经创建了输入框
let inputsCreated = false;

// 创建两个输入框
function createInputs() {
    if (!inputsCreated) {
        let num1 = document.createElement("input");
        let num2 = document.createElement("input");
        let symbol = document.createElement("span");

        num1.setAttribute("type", "text");
        num1.setAttribute("name", "num1");
        num1.setAttribute("placeholder", "请输入第一个数字");

        num2.setAttribute("type", "text");
        num2.setAttribute("name", "num2");
        num2.setAttribute("placeholder", "请输入第二个数字");

        symbol.textContent = "+";

        main.appendChild(num1);
        main.appendChild(symbol);
        main.appendChild(num2);

        inputsCreated = true;
    }
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    createInputs();

    // 移除之前的结果
    let previousResult = document.querySelector(".result");
    if (previousResult) {
        previousResult.remove();
    }

    // 计算结果
    let n1 = parseFloat(document.querySelector("input[name='num1']").value) || 0;
    let n2 = parseFloat(document.querySelector("input[name='num2']").value) || 0;
    let sum = n1 + n2;

    // 创建显示结果的元素
    let result = document.createElement("span");
    result.classList.add("result");
    result.textContent = ` = ${sum}`;
    main.appendChild(result);
});


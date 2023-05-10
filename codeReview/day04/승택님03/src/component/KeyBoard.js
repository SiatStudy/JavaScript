export default function KeyBoardBtn(btns) {
    return `
        <div>
            ${btns.map(btn => {
                return `<button class="btn-keyboard" data-key="${btn}">${btn}</button>`;
            }).join("\n") }
        </div>
    `;
}
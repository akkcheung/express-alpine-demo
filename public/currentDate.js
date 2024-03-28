class CurrentDate extends HTMLElement {
    
    connectedCallback(){
        const now = new Date()

       this.textContent = now.toLocaleDateString()

        console.log(this.textContent)
    }
}

customElements.define('current-date', CurrentDate)
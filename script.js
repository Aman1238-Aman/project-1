function predictOutbreak() {
    let location = document.getElementById("location").value;
    let symptoms = document.getElementById("symptoms").value;
    let result = document.getElementById("result");

    let riskLevel = "Low";
    
    if (location === "high-risk" && symptoms !== "healthy") {
        riskLevel = "Very High";
    } else if (location === "moderate-risk" && symptoms !== "healthy") {
        riskLevel = "Moderate";
    } else if (location === "low-risk" && symptoms !== "healthy") {
        riskLevel = "Low";
    }

    result.innerHTML = `Predicted Disease Outbreak Risk: <span style="color: red;">${riskLevel}</span>`;
}

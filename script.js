document.getElementById("organization").addEventListener("change", function () {
    var businessFields = document.getElementById("businessFields");
    var organizationFields = document.getElementById("organizationFields");
    if (this.value === "business") {
        businessFields.style.display = "block";
        organizationFields.style.display = "none";
    } else if (this.value === "organization") {
        businessFields.style.display = "none";
        organizationFields.style.display = "block";
    } else {
        businessFields.style.display = "none";
        organizationFields.style.display = "none";
    }
});

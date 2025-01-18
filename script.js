document.getElementById("generateChecklist").addEventListener("click", function() {
  const industry = document.getElementById("industry").value;
  const output = document.getElementById("checklistOutput");
  const downloadButton = document.getElementById("downloadChecklist");
  let checklist = "";

  switch(industry) {
    case "retail":
      checklist = `
        <ul>
          <li class="critical">
            <input type="checkbox"> Enable two-factor authentication for payment systems.
            <button onclick="removeItem(this)">Remove</button>
          </li>
          <li class="recommended">
            <input type="checkbox"> Regularly update POS software.
            <button onclick="removeItem(this)">Remove</button>
          </li>
          <li class="recommended">
            <input type="checkbox"> Conduct regular staff training on phishing awareness.
            <button onclick="removeItem(this)">Remove</button>
          </li>
        </ul>`;
      break;
    case "healthcare":
      checklist = `
        <ul>
          <li class="critical">
            <input type="checkbox"> Encrypt patient data and maintain HIPAA compliance.
            <button onclick="removeItem(this)">Remove</button>
          </li>
          <li class="critical">
            <input type="checkbox"> Perform regular risk assessments.
            <button onclick="removeItem(this)">Remove</button>
          </li>
          <li class="recommended">
            <input type="checkbox"> Secure all devices with antivirus and firewalls.
            <button onclick="removeItem(this)">Remove</button>
          </li>
        </ul>`;
      break;
    case "technology":
      checklist = `
        <ul>
          <li class="critical">
            <input type="checkbox"> Implement secure coding practices.
            <button onclick="removeItem(this)">Remove</button>
          </li>
          <li class="recommended">
            <input type="checkbox"> Regularly audit access controls.
            <button onclick="removeItem(this)">Remove</button>
          </li>
          <li class="recommended">
            <input type="checkbox"> Backup all critical data weekly.
            <button onclick="removeItem(this)">Remove</button>
          </li>
        </ul>`;
      break;
    case "finance":
      checklist = `
        <ul>
          <li class="critical">
            <input type="checkbox"> Use encryption for all sensitive transactions.
            <button onclick="removeItem(this)">Remove</button>
          </li>
          <li class="recommended">
            <input type="checkbox"> Conduct regular vulnerability scans.
            <button onclick="removeItem(this)">Remove</button>
          </li>
          <li class="critical">
            <input type="checkbox"> Monitor for unusual login activity.
            <button onclick="removeItem(this)">Remove</button>
          </li>
        </ul>`;
      break;
    default:
      checklist = "Please select a valid industry.";
  }

  output.innerHTML = checklist;
  downloadButton.style.display = "block";
});

// Remove checklist item
function removeItem(button) {
  button.parentElement.remove();
}

// Export checklist as PDF
document.getElementById("downloadChecklist").addEventListener("click", function() {
  const checklist = document.getElementById("checklistOutput").innerHTML;
  const blob = new Blob([checklist], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "checklist.html";
  a.click();
  URL.revokeObjectURL(url);
});

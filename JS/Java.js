
function gotoPayament(){
    window.location.href = "Paymanet.html";
}
function GotoUser(){
    window.location.href = "Users.html";
}
function GotoEmployee(){
    window.location.href = "Employee.html";
}
function OffersPage(){
    window.location.href = "order.html";
}
function GotoChart(){
    window.location.href = "charts.html";
}
function GotoNote(){
    window.location.href = "Note.html";
}
function gotoReports(){
    window.location.href = "reports.html";
}
//لفتح وتسكير الsidebar
const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', event => {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      });
    }

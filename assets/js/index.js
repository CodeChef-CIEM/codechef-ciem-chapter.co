function show_core()
{
    document.getElementById('core').style.display="flex";
    document.getElementById('exec1').style.display="none";
    document.getElementById('exec2').style.display="none";
}
function show_exec()
{
    document.getElementById('exec1').style.display="flex";
    document.getElementById('exec2').style.display="flex";
    document.getElementById('core').style.display="none";
}
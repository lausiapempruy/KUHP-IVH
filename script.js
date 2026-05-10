function scrollToPasal(nomor) {
  const element = document.getElementById(`pasal-${nomor}`);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
    // Highlight sebentar
    element.style.background = '#fff3cd';
    setTimeout(() => {
      element.style.background = '#fff';
    }, 2000);
  }
}

// Print mode
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'p') {
    alert('Dokumen resmi IVH. Dilarang diperjualbelikan.');
  }
});

console.log('KUHP IVH Loaded. De Tuchtraad waakt over u.');

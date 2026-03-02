
(async function(){
  const $ = (id)=>document.getElementById(id);
  const out = $('output');

  async function convert(){
    const from = $('from').value.trim().toUpperCase();
    const to = $('to').value.trim().toUpperCase();
    const amount = Number($('amount').value || '1');

    if(!from || !to){
      out.textContent = "Please enter 'from' and 'to' currency codes (e.g., USD, INR).";
      return;
    }
    if(!Number.isFinite(amount) || amount <= 0){
      out.textContent = "Amount must be a positive number.";
      return;
    }

    const url = new URL('https://api.frankfurter.app/latest');
    url.searchParams.set('from', from);
    url.searchParams.set('to', to);
    url.searchParams.set('amount', String(amount));

    out.textContent = 'Fetching…';
    try{
      const r = await fetch(url, { headers: { 'Accept': 'application/json' }});
      if(!r.ok){
        const text = await r.text();
        out.textContent = `Provider error (${r.status}):
` + text;
        return;
      }
      const data = await r.json();
      const converted = data.rates?.[to] ?? null;
      const rate = converted ? (converted/amount) : null;
      out.textContent = JSON.stringify({
        from: data.base,
        to,
        amount,
        rate,
        converted,
        date: data.date,
        provider: 'Frankfurter (ECB)',
        provider_url: 'https://www.frankfurter.app'
      }, null, 2);
    }catch(err){
      out.textContent = 'Error: ' + err.message;
    }
  }

  $('convertBtn').addEventListener('click', convert);
})();

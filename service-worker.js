const OUTBOX='finn.outbox';
const ids=['finn-selection','finn-page','finn-link'];
chrome.runtime.onInstalled.addListener(()=>chrome.contextMenus.removeAll(()=>{
 chrome.contextMenus.create({id:ids[0],title:'Save selected text to FINN',contexts:['selection']});
 chrome.contextMenus.create({id:ids[1],title:'Save this page to FINN',contexts:['page']});
 chrome.contextMenus.create({id:ids[2],title:'Save link to FINN',contexts:['link']});
}));
chrome.contextMenus.onClicked.addListener(async(info,tab)=>{
 if(!ids.includes(String(info.menuItemId)))return;
 const selected=info.menuItemId===ids[0],linked=info.menuItemId===ids[2];
 const item={kind:selected?'quote':linked?'link':'page',title:selected?(info.selectionText||'').slice(0,90):linked?'Saved link':(tab?.title||'Saved page'),content:selected?(info.selectionText||''):'',note:'',url:linked?info.linkUrl:(info.pageUrl||tab?.url||''),source_title:tab?.title||'',tags:[],visibility:'team'};
 const current=(await chrome.storage.local.get(OUTBOX))[OUTBOX]||[];
 await chrome.storage.local.set({[OUTBOX]:[...current,item]});
 if(chrome.action.setBadgeText){await chrome.action.setBadgeBackgroundColor({color:'#8e72ff'});await chrome.action.setBadgeText({text:'✓',tabId:tab?.id});setTimeout(()=>chrome.action.setBadgeText({text:'',tabId:tab?.id}),1600)}
});
window.__require=function e(t,n,o){function r(c,a){if(!n[c]){if(!t[c]){var l=c.split("/");if(l=l[l.length-1],!t[l]){var s="function"==typeof __require&&__require;if(!a&&s)return s(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+c+"'")}c=l}var u=n[c]={exports:{}};t[c][0].call(u.exports,function(e){return r(t[c][1][e]||e)},u,u.exports,e,t,n,o)}return n[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<o.length;c++)r(o[c]);return r}({CGame:[function(e,t,n){"use strict";cc._RF.push(t,"9e3470BUCpKiq+0oLRSidXG","CGame");var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=e("./CPiece"),a=e("./CPieceMgr"),l=e("../../XZH5Game/GameManager"),s=e("../../XZH5Game/PublicDefine"),u=cc._decorator,p=u.ccclass,d=u.property,f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.debugLabel=null,t.prefabPiece=null,t.nodeBg=null,t.nodeBgTip=null,t.nodePieceMgr=null,t.nodeFg=null,t.groupStart=null,t.nodeBtnStart=null,t.nodeStartCountDown=null,t.groupCountDown=null,t.labelCountDown=null,t.nodeAnimAvatar=null,t.nodeAnimWin=null,t.nodeAnimLose=null,t.groupWin=null,t.groupLose=null,t.labelLose=null,t.nodeBtnRetry=null,t.nodeBtnShare=null,t.mgrScale=.4,t.sfpPieceMask2=[],t.sfpPieceMask3=[],t.sfpPieceMask4=[],t.sfpPieceBG=null,t._bgWidth=0,t._bgHeight=0,t._pieceCol=2,t._pieceRow=2,t._pieceScale=1,t._piecePos=[],t._pieceNodes=[],t._timeLeft=0,t._gameState=s.GAME_STATE.GAME_INIT,t._btnSharePosX=0,t}return r(t,e),t.prototype.start=function(){null==l.default.Instance.spriteFramePuzzle&&(l.default.Instance.spriteFramePuzzle=this.sfpPieceBG),this._pieceCol=l.default.Instance.nLevel,this._pieceRow=l.default.Instance.nLevel,this._pieceScale=2/l.default.Instance.nLevel,this._bgWidth=this.nodeBg.width,this._bgHeight=this.nodeBg.height,this.nodeBgTip.getComponent(cc.Sprite).spriteFrame=l.default.Instance.spriteFramePuzzle,this.calcPiecePos(),null!=this.nodeBtnShare&&(this._btnSharePosX=this.nodeBtnShare.x),this.reloadAllPiece(!1),null!=this.debugLabel&&(this.debugLabel.node.active=s.default.DEBUG)},t.prototype.update=function(e){if(null!=this.debugLabel&&s.default.DEBUG&&(this.debugLabel.string=s.default.GetLogStr()),this._gameState==s.GAME_STATE.GAME_START){this._timeLeft-=e,this._timeLeft<=0&&(this._timeLeft=0,this.showGameEnd(s.GAME_END_TYPE.GAME_LOSE));var t=Math.ceil(this._timeLeft).toString();this.labelCountDown.string!=t&&(this.labelCountDown.string=t,localStorage.setItem("puzzleGameTimeLeft",t))}},t.prototype.reloadAllPiece=function(e){var t=this;this.nodeBg.removeAllChildren(),this.nodePieceMgr.removeAllChildren(),this.nodeFg.removeAllChildren(),this._gameState=s.GAME_STATE.GAME_INIT,this._timeLeft=l.default.Instance.nTimeLeft,this.nodePieceMgr.getComponent(a.default).reset(),this.labelCountDown.string=Math.ceil(this._timeLeft).toString(),this.groupCountDown.active=!1,null!=this.nodeAnimWin&&(this.nodeAnimWin.active=!1),null!=this.nodeAnimLose&&(this.nodeAnimLose.active=!1),null!=this.groupWin&&(this.groupWin.active=!1),null!=this.groupLose&&(this.groupLose.active=!1),null!=this.groupStart&&(this.groupStart.active=!0),null!=this.nodeBtnStart&&(this.nodeBtnStart.active=!0);var n=this.sfpPieceMask2;3==l.default.Instance.nLevel?n=this.sfpPieceMask3:4==l.default.Instance.nLevel&&(n=this.sfpPieceMask4),this._pieceNodes=[];for(var o=0;o<this._pieceRow;o++)for(var r=0;r<this._pieceCol;r++){var i=cc.instantiate(this.prefabPiece),u=i.getComponent(c.default);u.reloadBg(this.nodeFg,this._bgWidth,this._bgHeight,this._pieceCol,this._pieceRow,r,o),u.setTouchEndCallback(function(e,n){t.onPieceTouchEndCallback(e,n)}),u.setTouchStartCallback(function(e){t.onPieceTouchStartCallback(e)});var p=r+o*this._pieceCol;u.setBgMaskSpriteFrame(n[p]),u.setBgSpriteFrame(l.default.Instance.spriteFramePuzzle),this._pieceNodes.push(i),i.parent=this.nodeBg,i.scale=this._pieceScale,i.x=this._piecePos[o][r].x,i.y=this._piecePos[o][r].y}for(this._pieceNodes.sort(function(){return Math.random()-.5}),o=0;o<this._pieceNodes.length;o++){var d=this._pieceNodes[o].getComponent(c.default);cc.log("Piece"+o+":"+d.getPosString())}(null==this.nodeBtnStart||e)&&this.showGameStart()},t.prototype.onPieceTouchStartCallback=function(e){for(var t=this.nodePieceMgr.getComponent(a.default),n=-1,o=0;o<t.getPieceCount();o++)if(e==t.getPiece(o)){n=o;break}t.removePiece(n),t.moveToLeft(n)},t.prototype.onPieceTouchEndCallback=function(e,t){for(var n=cc.winSize.width,o=0,r=0,i=0;i<this._pieceRow;i++)for(var l=0;l<this._pieceCol;l++)(h=this.nodeBg.convertToWorldSpaceAR(this._piecePos[i][l]).sub(t).mag())<n&&(n=h,o=this._piecePos[i][l].x,r=this._piecePos[i][l].y,e.getComponent(c.default).setCurrentRowCol(i,l));e.parent!=this.nodeBg&&(this.changePieceParent(e,this.nodeBg),e.scale=this._pieceScale);var u=new cc.Vec2;u.y=0;var p=this.nodePieceMgr.getComponent(a.default),d=!1,f=-1;for(i=0;i<=p.getPieceCount();i++){var h;u.x=p.getOffset()/2+i*p.getOffset(),(h=this.nodePieceMgr.convertToWorldSpaceAR(u).sub(t).mag())<n&&(d=!0,n=h,o=u.x,r=u.y,f=i)}d?(this.changePieceParent(e,this.nodePieceMgr),e.scale=this.mgrScale,p.moveToRight(f),p.addPiece(f,e),e.getComponent(c.default).setCurrentRowCol(-1,-1),this.nodePieceMgr.getComponent(cc.AudioSource).play()):e.getComponent(c.default).isInRightPos()?(cc.log("piece is right"),this.nodePieceMgr.getComponent(cc.AudioSource).play(),this.checkAllPieces()&&this.showGameEnd(s.GAME_END_TYPE.GAME_WIN)):this.nodePieceMgr.getComponent(cc.AudioSource).play(),cc.Tween.stopAllByTarget(e),cc.tween(e).to(.1,{position:cc.v3(o,r,0)}).start()},t.prototype.changePieceParent=function(e,t){if(e.parent!=t){var n=new cc.Vec2(e.x,e.y),o=e.parent.convertToWorldSpaceAR(n);n=t.convertToNodeSpaceAR(o),e.x=n.x,e.y=n.y,e.parent=t,t==this.nodeBg?e.getComponent(c.default).setMoveFrom(1):t==this.nodePieceMgr&&e.getComponent(c.default).setMoveFrom(0)}},t.prototype.calcPiecePos=function(){var e=this._bgWidth/this._pieceCol,t=this._bgHeight/this._pieceRow,n=t>>1,o=t>>1;this._piecePos=[];for(var r=0;r<this._pieceRow;r++){this._piecePos[r]=[];for(var i=0;i<this._pieceCol;i++){var c=new cc.Vec2;c.x=n+e*i,c.y=-o-t*r,this._piecePos[r].push(c)}}},t.prototype.checkAllPieces=function(){for(var e=0;e<this._pieceNodes.length;e++){var t=this._pieceNodes[e].getComponent(c.default);if(null!=t&&!t.isInRightPos())return!1}return!0},t.prototype.showGameStart=function(){var e=this;cc.log("game start"),null!=this.nodeBtnStart&&(this.nodeBtnStart.active=!1),null!=this.nodeStartCountDown&&(this.nodeStartCountDown.getComponent(cc.AudioSource).play(),this.nodeStartCountDown.getComponent(cc.Animation).play(),cc.tween(this.nodeStartCountDown).delay(1).call(function(){e.nodeStartCountDown.getComponent(cc.AudioSource).play()}).delay(1).call(function(){e.nodeStartCountDown.getComponent(cc.AudioSource).play()}).delay(1).call(function(){e.groupStart.getComponent(cc.AudioSource).play()}).start()),cc.tween(this.node).delay(3).call(function(){e.onGameStarted()}).start()},t.prototype.onGameStarted=function(){var e=this;cc.log("on game started");for(var t=this.nodePieceMgr.getComponent(a.default),n=0,o=0,r=function(r){var a=i._pieceNodes[r];if(null!=a){var l=a.getComponent(c.default);if(null!=l){t.addPiece(n,a);var s=a.width*i.mgrScale,u=(s>>1)+n*s;n++,o<=0&&(o=s);var p=new cc.Vec2(u,0),d=i.nodePieceMgr.convertToWorldSpaceAR(p);p=i.nodeFg.convertToNodeSpaceAR(d),i.changePieceParent(a,i.nodeFg),cc.tween(a).to(.5,{position:cc.v3(p.x,p.y,0),scale:i.mgrScale}).call(function(){e.changePieceParent(a,e.nodePieceMgr),l.setMoveFrom(0),l.enableTouchEvent()}).start()}}},i=this,l=0;l<this._pieceNodes.length;l++)r(l);t.setOffset(o),this.groupCountDown.active=!0,this._gameState=s.GAME_STATE.GAME_START},t.prototype.showGameEnd=function(e){var t=this;cc.log("game end:"+e),this._gameState=s.GAME_STATE.GAME_END,l.default.Instance.eGameEndType=e;for(var n=0;n<this._pieceNodes.length;n++){var o=this._pieceNodes[n];if(null!=o){var r=o.getComponent(c.default);null!=r&&r.disableTouchEvent()}}e==s.GAME_END_TYPE.GAME_WIN?null!=this.nodeAnimWin&&(this.nodeAnimWin.active=!0,this.nodeAnimWin.getComponent(cc.Animation).play(),this.nodeAnimWin.getComponent(cc.AudioSource).play()):null!=this.nodeAnimLose&&(this.nodeAnimLose.active=!0,this.nodeAnimLose.getComponent(cc.Animation).play(),this.nodeAnimLose.getComponent(cc.AudioSource).play()),cc.tween(this.node).delay(3).call(function(){t.onGameEnded()}).start()},t.prototype.onGameEnded=function(){cc.log("on game ended:"+l.default.Instance.eGameEndType),l.default.Instance.eGameEndType==s.GAME_END_TYPE.GAME_WIN?null!=this.groupWin&&(this.groupWin.active=!0):(null!=this.groupLose&&(this.groupLose.active=!0),l.default.Instance.nScoreSpend+l.default.Instance.nScorePrice<=0?(null!=this.nodeBtnRetry&&(this.nodeBtnRetry.active=!1),null!=this.nodeBtnShare&&(this.nodeBtnShare.x=0),null!=this.labelLose&&(this.labelLose.string="\u771f\u53ef\u60dc\u6ca1\u6709\u8fc7\u5173~~\u627e\u597d\u53cb\u52a9\u529b\u6210\u529f\u53ef\u4ee5\u76f4\u63a5\u9886\u53d6\u5956\u52b1\u54e6\uff01")):l.default.Instance.nScoreSpend+l.default.Instance.nScorePrice>l.default.Instance.nScoreInit?(null!=this.nodeBtnRetry&&(this.nodeBtnRetry.active=!1),null!=this.nodeBtnShare&&(this.nodeBtnShare.x=0),null!=this.labelLose&&(this.labelLose.string="\u8fd8\u5dee\u4e00\u70b9\u5c31\u80fd\u8fc7\u5173\u4e86~~\u53ef\u60dc\u79ef\u5206\u4e0d\u8db3\u4e86\u3002\u627e\u597d\u53cb\u52a9\u529b\u6210\u529f\u53ef\u4ee5\u76f4\u63a5\u9886\u53d6\u5956\u52b1\u54e6\uff01")):(null!=this.nodeBtnRetry&&(this.nodeBtnRetry.active=!0),null!=this.nodeBtnShare&&(this.nodeBtnShare.x=this._btnSharePosX),null!=this.labelLose&&(this.labelLose.string="\u8fd8\u5dee\u4e00\u70b9\u5c31\u80fd\u8fc7\u5173\u4e86~~\u82b1\u8d39"+l.default.Instance.nScorePrice+"\u79ef\u5206\u518d\u8bd5\u4e00\u6b21\u4e48\uff1f\u627e\u597d\u53cb\u52a9\u529b\u6210\u529f\u53ef\u4ee5\u76f4\u63a5\u9886\u53d6\u5956\u52b1\u54e6\uff01")))},t.prototype.onClickBtnStart=function(){this.showGameStart()},t.prototype.onClickBtnReturn=function(){this.returnToMiniProgram(0)},t.prototype.onClickBtnRetry=function(){this.replayGame()},t.prototype.onClickBtnShare=function(){this.returnToMiniProgram(1)},t.prototype.replayGame=function(){l.default.Instance.nTimeLeft=l.default.Instance.nTime,localStorage.setItem("puzzleGameTimeLeft",l.default.Instance.nTimeLeft.toString()),l.default.Instance.nScoreSpend+=l.default.Instance.nScorePrice,localStorage.setItem("puzzleGameScoreSpend",l.default.Instance.nScoreSpend.toString()),this.reloadAllPiece(!0)},t.prototype.returnToMiniProgram=function(e){var t=l.default.Instance.strReturnUrl+"?level="+l.default.Instance.nLevel+"&time="+l.default.Instance.nTime+"&score="+l.default.Instance.nScoreInit+"&price="+l.default.Instance.nScorePrice+"&spend="+l.default.Instance.nScoreSpend+"&result="+l.default.Instance.eGameEndType+"&share="+e;null!=l.default.Instance.strUid&&""!=l.default.Instance.strUid&&(t+="&uid="+l.default.Instance.strUid),null!=l.default.Instance.strAppId&&""!=l.default.Instance.strAppId&&(t+="&appId="+l.default.Instance.strAppId),null!=l.default.Instance.strTimeStamp&&""!=l.default.Instance.strTimeStamp&&(t+="&timestamp="+l.default.Instance.strTimeStamp),s.default.Log("return to miniprogram:"+t),localStorage.removeItem("puzzleGameScoreSpend"),localStorage.removeItem("puzzleGameTimeLeft"),s.default.Log("wx:"+typeof wx),"undefined"!=typeof wx&&wx.miniProgram.getEnv(function(e){s.default.Log("miniprogram:"+e.miniprogram),e.miniprogram&&wx.miniProgram.navigateTo({url:t})})},i([d(cc.Label)],t.prototype,"debugLabel",void 0),i([d(cc.Prefab)],t.prototype,"prefabPiece",void 0),i([d(cc.Node)],t.prototype,"nodeBg",void 0),i([d(cc.Node)],t.prototype,"nodeBgTip",void 0),i([d(cc.Node)],t.prototype,"nodePieceMgr",void 0),i([d(cc.Node)],t.prototype,"nodeFg",void 0),i([d(cc.Node)],t.prototype,"groupStart",void 0),i([d(cc.Node)],t.prototype,"nodeBtnStart",void 0),i([d(cc.Node)],t.prototype,"nodeStartCountDown",void 0),i([d(cc.Node)],t.prototype,"groupCountDown",void 0),i([d(cc.Label)],t.prototype,"labelCountDown",void 0),i([d(cc.Node)],t.prototype,"nodeAnimAvatar",void 0),i([d(cc.Node)],t.prototype,"nodeAnimWin",void 0),i([d(cc.Node)],t.prototype,"nodeAnimLose",void 0),i([d(cc.Node)],t.prototype,"groupWin",void 0),i([d(cc.Node)],t.prototype,"groupLose",void 0),i([d(cc.Label)],t.prototype,"labelLose",void 0),i([d(cc.Node)],t.prototype,"nodeBtnRetry",void 0),i([d(cc.Node)],t.prototype,"nodeBtnShare",void 0),i([d],t.prototype,"mgrScale",void 0),i([d([cc.SpriteFrame])],t.prototype,"sfpPieceMask2",void 0),i([d([cc.SpriteFrame])],t.prototype,"sfpPieceMask3",void 0),i([d([cc.SpriteFrame])],t.prototype,"sfpPieceMask4",void 0),i([d(cc.SpriteFrame)],t.prototype,"sfpPieceBG",void 0),i([p],t)}(cc.Component);n.default=f,cc._RF.pop()},{"../../XZH5Game/GameManager":"GameManager","../../XZH5Game/PublicDefine":"PublicDefine","./CPiece":"CPiece","./CPieceMgr":"CPieceMgr"}],CInit:[function(e,t,n){"use strict";cc._RF.push(t,"cdb99RNRx5EvpUBje4681ow","CInit");var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=e("../../XZH5Game/GameManager"),a=e("../../XZH5Game/PublicDefine"),l=cc._decorator,s=l.ccclass,u=l.property,p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.debugLabel=null,t.nodeBg=null,t.progressBar=null,t.sfpDefaultPuzzle=null,t._retry=0,t}return r(t,e),t.prototype.start=function(){var e=localStorage.getItem("mainURL");a.default.Log("mainURL:"+e);var t=localStorage.getItem("puzzleGameParam");if(null!=t&&""!=t&&"null"!=t){a.default.Log("has param:"+t);var n=JSON.parse(t);null!=n.debug&&(a.default.DEBUG=!0),null!=n.level&&(c.default.Instance.nLevel=Number.parseInt(n.level),(null==c.default.Instance.nLevel||c.default.Instance.nLevel<2||c.default.Instance.nLevel>4)&&(c.default.Instance.nLevel=4)),null!=n.time&&(c.default.Instance.nTime=Number.parseInt(n.time),(null==c.default.Instance.nTime||c.default.Instance.nTime<=0)&&(c.default.Instance.nTime=10)),null!=n.score&&(c.default.Instance.nScoreInit=Number.parseInt(n.score),(null==c.default.Instance.nScoreInit||c.default.Instance.nScoreInit<0)&&(c.default.Instance.nScoreInit=0)),null!=n.cost&&(c.default.Instance.nScorePrice=Number.parseInt(n.price),(null==c.default.Instance.nScorePrice||c.default.Instance.nScorePrice<0)&&(c.default.Instance.nScorePrice=0)),c.default.Instance.strBGPath=n.bgPath,c.default.Instance.strPuzzlePath=n.puzzlePath,c.default.Instance.strUid=n.uid,c.default.Instance.strReturnUrl=n.returnUrl,c.default.Instance.strAppId=n.appId,c.default.Instance.strTimeStamp=n.timestamp,c.default.Instance.strNonceStr=n.nonceStr,c.default.Instance.strSignature=n.signature}else a.default.Log("no param:use test data"),a.default.DEBUG=!0,c.default.Instance.nLevel=2,c.default.Instance.nTime=10,c.default.Instance.nScoreInit=0,c.default.Instance.nScorePrice=0,c.default.Instance.strBGPath="https://songgravel.github.io/test/bg_001.jpg",c.default.Instance.strPuzzlePath="https://songgravel.github.io/test/product_001.png",c.default.Instance.strUid="12345",c.default.Instance.strReturnUrl="/pages/content/content",c.default.Instance.strAppId="123",c.default.Instance.strTimeStamp="12345678",c.default.Instance.strNonceStr="12345678",c.default.Instance.strSignature="12345678";var o=localStorage.getItem("puzzleGameTimeStamp");if(null!=o&&""!=o&&"null"!=o&&o==c.default.Instance.strTimeStamp){var r=localStorage.getItem("puzzleGameScoreSpend");c.default.Instance.nScoreSpend=null!=r&&""!=r&&"null"!=r?Number.parseInt(r):0;var i=localStorage.getItem("puzzleGameTimeLeft");c.default.Instance.nTimeLeft=null!=i&&""!=i&&"null"!=i?Number.parseInt(i):c.default.Instance.nTime}else localStorage.removeItem("puzzleGameTimeStamp"),localStorage.removeItem("puzzleGameScoreSpend"),localStorage.removeItem("puzzleGameTimeLeft"),c.default.Instance.nScoreSpend=0,c.default.Instance.nTimeLeft=c.default.Instance.nTime;this.loadRemoteBG(),cc.director.preloadScene("game",function(){cc.log("game scene preloaded")}),null!=this.debugLabel&&(this.debugLabel.node.active=a.default.DEBUG)},t.prototype.update=function(){null!=this.debugLabel&&a.default.DEBUG&&(this.debugLabel.string=a.default.GetLogStr())},t.prototype.loadRemoteBG=function(){if(cc.log("loadRemoteBG"),null==c.default.Instance.strBGPath||""==c.default.Instance.strBGPath)return this.progressBar.progress=.5,void this.loadRemotePuzzle();var e=this;cc.assetManager.loadRemote(c.default.Instance.strBGPath,{onFileProgress:function(t,n){n>0&&(e.progressBar.progress=t/n*.5)}},function(t,n){if(t)return a.default.Log("[CInit][loadRemoteBG]LoadSprite:"+t.message),this.progressBar.progress=.5,void e.loadRemotePuzzle();var o=new cc.SpriteFrame(n);e.nodeBg.getComponent(cc.Sprite).spriteFrame=o,e.loadRemotePuzzle()})},t.prototype.loadRemotePuzzle=function(){if(cc.log("loadRemotePuzzle"),this._retry++,this._retry>3||null==c.default.Instance.strPuzzlePath||""==c.default.Instance.strPuzzlePath)return c.default.Instance.spriteFramePuzzle=this.sfpDefaultPuzzle,this.progressBar.progress=1,cc.log("load default puzzle"),void this.switchScene();var e=this;cc.assetManager.loadRemote(c.default.Instance.strPuzzlePath,{onFileProgress:function(t,n){n>0&&(e.progressBar.progress=.5+t/n*.5)}},function(t,n){if(t)return a.default.Log("[CInit][loadRemotePuzzle]LoadSprite:"+t.message),void e.loadRemotePuzzle();e.progressBar.progress=1;var o=new cc.SpriteFrame(n);c.default.Instance.spriteFramePuzzle=o,e.switchScene()})},t.prototype.switchScene=function(){cc.log("switch scene"),cc.director.loadScene("game")},i([u(cc.Label)],t.prototype,"debugLabel",void 0),i([u(cc.Node)],t.prototype,"nodeBg",void 0),i([u(cc.ProgressBar)],t.prototype,"progressBar",void 0),i([u(cc.SpriteFrame)],t.prototype,"sfpDefaultPuzzle",void 0),i([s],t)}(cc.Component);n.default=p,cc._RF.pop()},{"../../XZH5Game/GameManager":"GameManager","../../XZH5Game/PublicDefine":"PublicDefine"}],CPieceMgr:[function(e,t,n){"use strict";cc._RF.push(t,"81576S1vcJEbrz6xI2pyNqY","CPieceMgr");var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,l=(c.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._pieces=[],t._offset=0,t}return r(t,e),t.prototype.start=function(){},t.prototype.reset=function(){this._offset=0,this._pieces=[]},t.prototype.getPieceCount=function(){return this._pieces.length},t.prototype.getPiece=function(e){return e<0||e>=this._pieces.length?null:this._pieces[e]},t.prototype.addPiece=function(e,t){e<0||e>this._pieces.length||null!=t&&this._pieces.splice(e,0,t)},t.prototype.removePiece=function(e){e<0||e>=this._pieces.length||this._pieces.splice(e,1)},t.prototype.moveToLeft=function(e){if(!(e<0||e>=this._pieces.length))for(var t=0;t<this._pieces.length;t++)t>=e&&(cc.Tween.stopAllByTarget(this._pieces[t]),cc.tween(this._pieces[t]).to(.5,{position:cc.v3((this._offset>>1)+t*this._offset,0,0)}).start())},t.prototype.moveToRight=function(e){if(!(e<0||e>=this._pieces.length))for(var t=0;t<this._pieces.length;t++)t>=e&&(cc.Tween.stopAllByTarget(this._pieces[t]),cc.tween(this._pieces[t]).to(.1,{position:cc.v3((this._offset>>1)+(t+1)*this._offset,0,0)}).start())},t.prototype.setOffset=function(e){this._offset=e},t.prototype.getOffset=function(){return this._offset},i([a],t)}(cc.Component));n.default=l,cc._RF.pop()},{}],CPiece:[function(e,t,n){"use strict";cc._RF.push(t,"4f1f5MECm1NQJq2q7dmIPgj","CPiece");var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,l=c.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.nodeBg=null,t._nodeFg=null,t._totalCol=0,t._totalRow=0,t._colIndex=0,t._rowIndex=0,t._colCurr=-1,t._rowCurr=-1,t._bgWidth=0,t._bgHeight=0,t._touchEndCallback=null,t._touchMoveCallback=null,t._touchStartCallback=null,t._moveFrom=0,t._scale=1,t._touchMoved=!1,t}return r(t,e),t.prototype.start=function(){},t.prototype.enableTouchEvent=function(){var e=this;this.node.on(cc.Node.EventType.TOUCH_START,function(){null!=e._touchStartCallback&&0==e._moveFrom&&e._touchStartCallback(e.node),null!=e._nodeFg&&e._nodeFg.getComponent(cc.AudioSource).play(),e._touchMoved=!1}),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){e._touchMoved=!0;var n=null!=e._nodeFg?e._nodeFg:cc.director.getScene();e.node.parent=n;var o=n.convertToNodeSpaceAR(t.getLocation());e.node.x=o.x,e.node.y=o.y,e.node.scale<e._scale&&(e.node.scale=e._scale)}),this.node.on(cc.Node.EventType.TOUCH_END,function(t){null!=e._touchEndCallback&&e._touchEndCallback(e.node,t.getLocation())})},t.prototype.disableTouchEvent=function(){this.node.off(cc.Node.EventType.TOUCH_START),this.node.off(cc.Node.EventType.TOUCH_MOVE),this.node.off(cc.Node.EventType.TOUCH_END)},t.prototype.setBgMaskSpriteFrame=function(e){this.node.getComponent(cc.Mask).spriteFrame=e},t.prototype.setBgSpriteFrame=function(e){this.nodeBg.getComponent(cc.Sprite).spriteFrame=e},t.prototype.setMoveFrom=function(e){this._moveFrom=e},t.prototype.setTouchStartCallback=function(e){this._touchStartCallback=e},t.prototype.setTouchMoveCallback=function(e){this._touchMoveCallback=e},t.prototype.setTouchEndCallback=function(e){this._touchEndCallback=e},t.prototype.reloadBg=function(e,t,n,o,r,i,c){this._nodeFg=e,this._totalCol=o,this._totalRow=r,this._colIndex=i,this._rowIndex=c,this._bgWidth=t,this._bgHeight=n,this._scale=2/o;var a=this._bgWidth/2,l=this._bgHeight/2,s=l>>1,u=-(l>>1)-a*this._colIndex,p=s+l*this._rowIndex;this.nodeBg.x=u,this.nodeBg.y=p,this.nodeBg.scale=1/this._scale},t.prototype.setCurrentRowCol=function(e,t){this._rowCurr=e,this._colCurr=t},t.prototype.isTouchMoved=function(){return this._touchMoved},t.prototype.isInRightPos=function(){return this._colCurr==this._colIndex&&this._rowCurr==this._rowIndex},t.prototype.getPosString=function(){return"row:"+this._rowIndex+" col:"+this._colIndex+" curr:"+this._rowCurr+","+this._colCurr+" "+this.isInRightPos()},i([l(cc.Node)],t.prototype,"nodeBg",void 0),i([a],t)}(cc.Component);n.default=s,cc._RF.pop()},{}],EventManager:[function(e,t,n){"use strict";cc._RF.push(t,"de2b3THrftOtJW+XpoPeai8","EventManager");var o=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o};Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(){}return e.register=function(t,n,o){e.listeners[t]||(e.listeners[t]=[]),e.listeners[t].push(new i(n,o))},e.remove=function(t,n,o){var r=e.listeners[t];if(r){for(var i=r.length,c=0;c<i;c++)if(r[c].compar(o)){r.splice(c,1);break}0==r.length&&delete e.listeners[t]}},e.isRegistered=function(t,n,o){var r=e.listeners[t];if(!r)return!1;for(var i=r.length,c=0;c<i;c++)if(r[c].compar(o))return!0;return!1},e.fire=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=e.listeners[t];if(i){for(var c=i.length,a=[],l=0,s=i;l<s.length;l++){var u=s[l];a.push(u)}for(var p=0;p<c;p++)(u=a[p])&&u.notify.apply(u,o([t],n));a=null}},e.listeners={},e}();n.default=r;var i=function(){function e(e,t){this.callback=null,this.context=null,this.callback=e,this.context=t}return e.prototype.notify=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=this;(e=r.callback).call.apply(e,o([r.context],t))},e.prototype.compar=function(e){return e==this.context},e}();cc._RF.pop()},{}],GameManager:[function(e,t,n){"use strict";cc._RF.push(t,"94d9bzcnxVCGIsxDxhqhP2U","GameManager"),Object.defineProperty(n,"__esModule",{value:!0});var o=e("./PublicDefine"),r=function(){function e(){this.nLevel=4,this.nTime=10,this.nScoreInit=0,this.nScorePrice=0,this.strBGPath="",this.strPuzzlePath="",this.strUid="",this.nScoreSpend=0,this.nTimeLeft=0,this.strReturnUrl="",this.strAppId="",this.strTimeStamp="",this.strNonceStr="",this.strSignature="",this.spriteFramePuzzle=null,this.eGameEndType=o.GAME_END_TYPE.GAME_LOSE,this.eSceneType=o.SCENE_TYPE.WELCOME_SCENE}return Object.defineProperty(e,"Instance",{get:function(){return null==e._instance&&(e._instance=new e),e._instance},enumerable:!1,configurable:!0}),e.prototype.Init=function(){o.default.Log("[GameManager][Init]")},e}();n.default=r,cc._RF.pop()},{"./PublicDefine":"PublicDefine"}],PublicDefine:[function(e,t,n){"use strict";cc._RF.push(t,"dbe0eaE0DRJg4pp+ZWV9AwQ","PublicDefine"),Object.defineProperty(n,"__esModule",{value:!0}),n.GAME_END_TYPE=n.GAME_STATE=n.SCENE_TYPE=void 0,function(e){e[e.WELCOME_SCENE=0]="WELCOME_SCENE",e[e.GAME_SCENE=1]="GAME_SCENE"}(n.SCENE_TYPE||(n.SCENE_TYPE={})),function(e){e[e.GAME_INIT=0]="GAME_INIT",e[e.GAME_START=1]="GAME_START",e[e.GAME_END=2]="GAME_END"}(n.GAME_STATE||(n.GAME_STATE={})),function(e){e[e.GAME_LOSE=0]="GAME_LOSE",e[e.GAME_WIN=1]="GAME_WIN"}(n.GAME_END_TYPE||(n.GAME_END_TYPE={}));var o=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return null==e._instance&&(e._instance=new e),e._instance},enumerable:!1,configurable:!0}),e.Log=function(e){console.log(e),this.LOG_STR+=e+"\r\n"},e.GetLogStr=function(){return this.LOG_STR},e.LoadRemoteImg=function(t,n){cc.loader.load(n,function(n,o){if(n)e.Log("[PublicDefine][LoadRemoteImg]LoadSprite:"+n.message);else{var r=new cc.SpriteFrame(o);t.spriteFrame=r}})},e.LoadSpriteFrame=function(t,n,o,r){var i=t;i.length>0&&(0==i.indexOf("Atlas/")||0==i.indexOf("TiledMap/"))?cc.loader.loadRes(i,cc.SpriteAtlas,function(t,i){if(t)return e.Log("[PublicDefine][LoadSpriteFrame]LoadSpriteAtlas:"+t.message),void o.call(r,null);var c=i.getSpriteFrame(n);o.call(r,c)}):cc.loader.loadRes(i+n,cc.SpriteFrame,function(t,n){if(t)return e.Log("[PublicDefine][LoadSpriteFrame]LoadSprite:"+t.message),void o.call(r,null);o.call(r,n)})},e.LoadAudioClip=function(t,n,o){cc.loader.loadRes(t,cc.AudioClip,function(t,r){if(t)return e.Log("[PublicDefine][LoadAudioClip]LoadAudio:"+t.message),void n.call(o,null);n.call(o,r)})},e.Random=function(e,t,n){return void 0===n&&(n=!1),n?Math.floor(Math.random()*(t-e+1))+e:Math.floor(Math.random()*(t-e))+e},e.PrefixInteger=function(e,t){return(Array(t).join("0")+e).slice(-t)},e.CompareVersion=function(e,t){for(var n=e.split("."),o=t.split("."),r=Math.max(n.length,o.length);n.length<r;)n.push("0");for(;o.length<r;)o.push("0");for(var i=0;i<r;i++){var c=parseInt(n[i]),a=parseInt(o[i]);if(c>a)return 1;if(c<a)return-1}return 0},e.DEBUG=!1,e.REMOTE_URL="",e.REMOTE_CONFIG=!1,e.REMOTE_RESOURCE=!1,e.PHOTOPOSTFIX=".png",e.PLISTPOSTFIX=".plist",e.LOG_STR="",e}();n.default=o,cc._RF.pop()},{}]},{},["EventManager","GameManager","PublicDefine","CGame","CInit","CPiece","CPieceMgr"]);
RecordingDetailsItem.addDelegate({
			onAfterRendering:function(oEvent){
					var notConfirm = this.getBindingContext().getObject().NOTCONFIRM
					if(notConfirm){
						this.$().css('background-color','#ffa4a4')
					}
				}
				},false,RecordingDetailsItem,true)

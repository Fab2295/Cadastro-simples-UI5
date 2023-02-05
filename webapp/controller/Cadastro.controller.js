sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function(Controller, JSONModel, MessageToast) {
        "use strict";

        var jsonMock = {
            "Pessoa": [{
                "ID": 1113,
                "Nome": "Fabrício",
                "Sobrenome": "Medeiros",
                "Email": "fabricio221995@hotmail.com",
                "Sexo": "Masculino"
            }]
        }

        return Controller.extend("sap.cadastro.cadastro.controller.Cadastro", {
            onInit: function() {
                var oModel = new JSONModel(jsonMock);
                this.getView().setModel(oModel);
            },

            getModel() {
                return this.getView().getModel();
            },

            setDataModel(oModel, data) {
                if (oModel === undefined || oModel === null) {
                    throw new Error("Model undifined or null");
                }

                oModel.setData(data);
            },


            cadastrar: function() {
                let Nome = this.getView().byId("_IDInputlNome").getValue();
                let Sobrenome = this.getView().byId("_IDInputSobreNome").getValue();
                let Email = this.getView().byId("_IDInputEmail").getValue();
                let sexo = this.getView().byId("_IDSexoSelect").getSelectedItem().getText();

                jsonMock.Pessoa.push({
                    ID: parseInt(Math.random() * 9999),
                    Nome,
                    Sobrenome,
                    Email,
                    Sexo: sexo
                });

                try {
                    this.setDataModel(this.getModel(), jsonMock);
                } catch {
                    MessageToast.show("Error no SetModel");
                }


                MessageToast.show("Cadastrado com sucesso!");
            }
        });
    });
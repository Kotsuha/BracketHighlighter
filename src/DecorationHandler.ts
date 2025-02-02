import * as vscode from 'vscode';
import { bracketHighlightGlobals } from './GlobalsHandler';

export const enum DecorationType {
    SYMBOLS,
    CONTENT
}

export default class DecorationHandler {

    public decorationType: DecorationType;

    constructor(decorationType: DecorationType = DecorationType.CONTENT) {
        this.decorationType = decorationType;
    }

    public getDecorationType(): vscode.TextEditorDecorationType {
        let decorationOptions;
        if (this.decorationType === DecorationType.CONTENT) {
            decorationOptions = bracketHighlightGlobals.contentDecorationOptions;
        }
        else {
            decorationOptions = bracketHighlightGlobals.symbolDecorationOptions;
        }
        let decorationType: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType({
            color: decorationOptions.color,
            fontWeight: decorationOptions.fontWeight,
            fontStyle: decorationOptions.fontStyle,
            letterSpacing: decorationOptions.letterSpacing,
            outline: decorationOptions.outline,
            border: decorationOptions.border,
            textDecoration: decorationOptions.textDecoration,
            backgroundColor: decorationOptions.backgroundColor,
            overviewRulerLane: vscode.OverviewRulerLane.Left,
            overviewRulerColor: decorationOptions.backgroundColor,
        });
        return decorationType;
    }
}
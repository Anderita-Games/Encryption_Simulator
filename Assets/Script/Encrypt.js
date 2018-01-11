#pragma strict
var Import : UnityEngine.UI.InputField;
var Export : UnityEngine.UI.InputField;

var numboro: int;

var imports = new Array ();
var Imports : String;

var str : String;

function Changer () {
	Imports = Import.text;
	numboro = 1;
	imports.Clear();
	while (numboro < Import.text.length + 1) {
		if (Imports.Substring(numboro - 1, 1) == "A" || Imports.Substring(numboro - 1, 1) == "a") {
			imports[numboro] = PlayerPrefs.GetString("a");
		}else if (Imports.Substring(numboro - 1, 1) == "B" || Imports.Substring(numboro - 1, 1) == "b") {
			imports[numboro] = PlayerPrefs.GetString("b");
		}else if (Imports.Substring(numboro - 1, 1) == "C" || Imports.Substring(numboro - 1, 1) == "c") {
			imports[numboro] = PlayerPrefs.GetString("c");
		}else if (Imports.Substring(numboro - 1, 1) == "D" || Imports.Substring(numboro - 1, 1) == "d") {
			imports[numboro] = PlayerPrefs.GetString("d");
		}else if (Imports.Substring(numboro - 1, 1) == "E" || Imports.Substring(numboro - 1, 1) == "e") {
			imports[numboro] = PlayerPrefs.GetString("e");
		}else if (Imports.Substring(numboro - 1, 1) == "F" || Imports.Substring(numboro - 1, 1) == "f") {
			imports[numboro] = PlayerPrefs.GetString("f");
		}else if (Imports.Substring(numboro - 1, 1) == "G" || Imports.Substring(numboro - 1, 1) == "g") {
			imports[numboro] = PlayerPrefs.GetString("g");
		}else if (Imports.Substring(numboro - 1, 1) == "H" || Imports.Substring(numboro - 1, 1) == "h") {
			imports[numboro] = PlayerPrefs.GetString("h");
		}else if (Imports.Substring(numboro - 1, 1) == "I" || Imports.Substring(numboro - 1, 1) == "i") {
			imports[numboro] = PlayerPrefs.GetString("i");
		}else if (Imports.Substring(numboro - 1, 1) == "J" || Imports.Substring(numboro - 1, 1) == "j") {
			imports[numboro] = PlayerPrefs.GetString("j");
		}else if (Imports.Substring(numboro - 1, 1) == "K" || Imports.Substring(numboro - 1, 1) == "k") {
			imports[numboro] = PlayerPrefs.GetString("k");
		}else if (Imports.Substring(numboro - 1, 1) == "L" || Imports.Substring(numboro - 1, 1) == "l") {
			imports[numboro] = PlayerPrefs.GetString("l");
		}else if (Imports.Substring(numboro - 1, 1) == "M" || Imports.Substring(numboro - 1, 1) == "m") {
			imports[numboro] = PlayerPrefs.GetString("m");
		}else if (Imports.Substring(numboro - 1, 1) == "N" || Imports.Substring(numboro - 1, 1) == "n") {
			imports[numboro] = PlayerPrefs.GetString("n");
		}else if (Imports.Substring(numboro - 1, 1) == "O" || Imports.Substring(numboro - 1, 1) == "o") {
			imports[numboro] = PlayerPrefs.GetString("o");
		}else if (Imports.Substring(numboro - 1, 1) == "P" || Imports.Substring(numboro - 1, 1) == "p") {
			imports[numboro] = PlayerPrefs.GetString("p");
		}else if (Imports.Substring(numboro - 1, 1) == "Q" || Imports.Substring(numboro - 1, 1) == "q") {
			imports[numboro] = PlayerPrefs.GetString("q");
		}else if (Imports.Substring(numboro - 1, 1) == "R" || Imports.Substring(numboro - 1, 1) == "r") {
			imports[numboro] = PlayerPrefs.GetString("r");
		}else if (Imports.Substring(numboro - 1, 1) == "S" || Imports.Substring(numboro - 1, 1) == "s") {
			imports[numboro] = PlayerPrefs.GetString("s");
		}else if (Imports.Substring(numboro - 1, 1) == "T" || Imports.Substring(numboro - 1, 1) == "t") {
			imports[numboro] = PlayerPrefs.GetString("t");
		}else if (Imports.Substring(numboro - 1, 1) == "U" || Imports.Substring(numboro - 1, 1) == "u") {
			imports[numboro] = PlayerPrefs.GetString("u");
		}else if (Imports.Substring(numboro - 1, 1) == "V" || Imports.Substring(numboro - 1, 1) == "v") {
			imports[numboro] = PlayerPrefs.GetString("v");
		}else if (Imports.Substring(numboro - 1, 1) == "W" || Imports.Substring(numboro - 1, 1) == "w") {
			imports[numboro] = PlayerPrefs.GetString("w");
		}else if (Imports.Substring(numboro - 1, 1) == "X" || Imports.Substring(numboro - 1, 1) == "x") {
			imports[numboro] = PlayerPrefs.GetString("x");
		}else if (Imports.Substring(numboro - 1, 1) == "Y" || Imports.Substring(numboro - 1, 1) == "y") {
			imports[numboro] = PlayerPrefs.GetString("y");
		}else if (Imports.Substring(numboro - 1, 1) == "Z" || Imports.Substring(numboro - 1, 1) == "z") {
			imports[numboro] = PlayerPrefs.GetString("z");
		}else if (Imports.Substring(numboro - 1, 1) == "") {
			imports[numboro] = "";
		}else {
			Debug.Log("Error");
		}
		Debug.Log("Success x" + numboro);
		numboro ++; //Adds one to Numboro
		str = Array(imports).Join("");
	}
	Export.text = str;
	Debug.Log(str);
}

function MainMenu () { //Love how I have complicated Sh!t and then I have a simple return to ManMenu function
	Application.LoadLevel ("MainMenu");
}
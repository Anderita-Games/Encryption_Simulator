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
		if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("a")) {
			imports[numboro] = "a";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("b")) {
			imports[numboro] = "b";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("c")) {
			imports[numboro] = "c";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("d")) {
			imports[numboro] = "d";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("e")) {
			imports[numboro] = "e";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("f")) {
			imports[numboro] = "f";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("g")) {
			imports[numboro] = "g";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("h")) {
			imports[numboro] = "h";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("i")) {
			imports[numboro] = "i";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("j")) {
			imports[numboro] = "j";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("k")) {
			imports[numboro] = "k";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("l")) {
			imports[numboro] = "l";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("m")) {
			imports[numboro] = "m";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("n")) {
			imports[numboro] = "n";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("o")) {
			imports[numboro] = "o";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("p")) {
			imports[numboro] = "p";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("q")) {
			imports[numboro] = "q";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("r")) {
			imports[numboro] = "r";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("s")) {
			imports[numboro] = "s";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("t")) {
			imports[numboro] = "t";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("u")) {
			imports[numboro] = "u";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("v")) {
			imports[numboro] = "v";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("w")) {
			imports[numboro] = "w";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("x")) {
			imports[numboro] = "x";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("y")) {
			imports[numboro] = "y";
		}else if (Imports.Substring(numboro - 1, 1) == PlayerPrefs.GetString("z")) {
			imports[numboro] = "z";
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
### Hexlet tests and linter status:
[![Actions Status](https://github.com/rizhik356/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/rizhik356/frontend-project-46/actions)
[![build-check](https://github.com/rizhik356/frontend-project-46/actions/workflows/build-check.yml/badge.svg)](https://github.com/rizhik356/frontend-project-46/actions/workflows/build-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/ce2983a489336d5b529d/maintainability)](https://codeclimate.com/github/rizhik356/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ce2983a489336d5b529d/test_coverage)](https://codeclimate.com/github/rizhik356/frontend-project-46/test_coverage)

## GenDiff

Gendiff compares 2 different files and displays the result in the selected format

* [Installation](#Install)
* [Input Format](#Input)
* [Output Format](#Output)
* [Help](#Help)

 <a name="Install"><h2>Installation</h2></a>
```bash
make install
```

<a name="Input"><h2>Format type of input files</h2></a>

Gendiff 0.0.8 supports : ```JSON```, ```Yaml```

<a name="Output"><h2>Type of output files</h2></a>

Gendiff 0.0.8 can returns the result of comparasion in 3 formats:
* [Stylish (default value)](#Stylish)
* [Plain](#Plain)
* [JSON](#JSON)

<a name="Help"><h2>Help</h2></a>
The help option ```-h, --help```
```bash
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -f, --format <type>  output format (default: "stylish")
  -V, --version        output the version number
  -h, --help           display help for command
```

## Compare of 2 files
```gendiff <filepath1> <filepath2>```

<a href="https://asciinema.org/a/XN1HuOLURnTVFSxow0wmZgcm3" target="_blank"><img src="https://asciinema.org/a/XN1HuOLURnTVFSxow0wmZgcm3.svg" /></a>

## Working gendiff, tests (EsLint, Jest) and compare two files (JSON, YAML)
```gendiff <filepath1> <filepath2>```

<a href="https://asciinema.org/a/5nR18rI4zC7ek2DslhjxmgTwJ" target="_blank"><img src="https://asciinema.org/a/5nR18rI4zC7ek2DslhjxmgTwJ.svg" /></a>

<a name="Stylish"><h2>Working gendiff with formatter stylish on plain and nested files</h2></a>
```gendiff -f stylish <filepath1> <filepath2>```, or ```gendiff <filepath1> <filepath2>```


<a href="https://asciinema.org/a/JuRCXT2CUISnS1G0Qh8SPam8B" target="_blank"><img src="https://asciinema.org/a/JuRCXT2CUISnS1G0Qh8SPam8B.svg" /></a>

<a name="Plain"><h2>Working gendiff with formatter plain on nested files</h2></a>
```gendiff -f plain <filepath1> <filepath2>```


<a href="https://asciinema.org/a/XKLnaAmRyDMhNaXpUJOz1x0OE" target="_blank"><img src="https://asciinema.org/a/XKLnaAmRyDMhNaXpUJOz1x0OE.svg" /></a>

<a name="JSON"><h2>Working gendiff with formatter json on nested files</h2></a>
```gendiff -f json <filepath1> <filepath2>```


<a href="https://asciinema.org/a/ZM5WtvcmSykeN40QyYxS2XXW4" target="_blank"><img src="https://asciinema.org/a/ZM5WtvcmSykeN40QyYxS2XXW4.svg" /></a>

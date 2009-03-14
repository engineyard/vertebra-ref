# Copyright 2008, Engine Yard, Inc.
CORE=*.tex
COMPONENTS=components/*.tex
twopi_files=$(wildcard figs/dot/*.twopi)
neato_files=$(wildcard figs/dot/*.neato)
dot_files=$(wildcard figs/dot/*.dot)
png_files=figs/png/*.png
FIGS=$(patsubst %.twopi,%.pdf,$(twopi_files)) \
     $(patsubst %.neato,%.pdf,$(neato_files)) \
     $(patsubst %.dot,%.pdf,$(dot_files)) \
     $(png_files)
CONCEPTS=concepts/*.tex concepts/*/*.tex
MATH=math/*.tex
PROTO=proto/*.tex
USE=use/*.tex

noinst_DATA=vertebra.pdf interim.pdf

CLEANFILES=$(noinst_DATA)
EXTRA_DIST = $(CORE) $(COMPONENTS) $(CONCEPTS) $(MATH) $(PROTO) $(USE) \
	$(twopi_files) $(neato_files) $(dot_files) $(png_files)

all-local:
	$(MAKE) clean_intermediate

%.pdf: %.eps
	$(PS2PDF) $< $@

%.eps: %.dot
	$(DOT) -Tps2 -o $@ $<

%.eps: %.twopi
	$(TWOPI) -Tps2 -o $@ $<

%.eps: %.neato
	$(NEATO) -Tps2 -o $@ $<

figs: $(FIGS)

vertebra.pdf: $(CORE) $(COMPONENTS) figs $(CONCEPTS) $(MATH) $(PROTO) $(USE)
	$(PDFLATEX) vertebra.tex
	$(MAKEINDEX) vertebra.idx -o vertebra.ind
	$(MAKEINDEX) vertebra.tdx -o vertebra.tnd
	$(MAKEINDEX) vertebra.nlo -s nomencl.ist -o vertebra.nls
	$(PDFLATEX) vertebra.tex

interim.pdf: interim.tex ititle.tex $(FIGS) $(COMPONENTS) $(CONCEPTS) $(PROTO)
	$(PDFLATEX) interim.tex
	$(MAKEINDEX) interim.idx -o interim.ind
	$(MAKEINDEX) interim.tdx -o interim.tnd
	$(MAKEINDEX) interim.nlo -s nomencl.ist -o interim.nls
	$(PDFLATEX) interim.tex

clean_intermediate:
	rm -f *.aux */*.aux */*/*.aux *.log *.ind *.toc *.ilg *.idx *.out *.nlo *.nls *.tnd *.tdx *.lot *.lof
	rm -f figs/dot/*.pdf

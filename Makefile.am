# Copyright 2008, Engine Yard, Inc.
CORE=*.tex
COMPONENTS=components/*.tex
FIGS=$(patsubst %.twopi,%.pdf,$(wildcard figs/dot/*.twopi)) \
     $(patsubst %.neato,%.pdf,$(wildcard figs/dot/*.neato)) \
     $(patsubst %.dot,%.pdf,$(wildcard figs/dot/*.dot)) \
     figs/png/*.png
CONCEPTS=concepts/*.tex concepts/*/*.tex
MATH=math/*.tex
PROTO=proto/*.tex
USE=use/*.tex

noinst_DATA=vertebra.pdf interim.pdf

CLEANFILES=$(noinst_DATA)

all-local:
	$(MAKE) clean_intermediate

%.pdf: %.dot
	$(DOT) -Tpdf -o $@ $<

%.pdf: %.twopi
	$(TWOPI) -Tpdf -o $@ $<

%.pdf: %.neato
	$(NEATO) -Tpdf -o $@ $<

vertebra.pdf: $(CORE) $(COMPONENTS) $(FIGS) $(CONCEPTS) $(MATH) $(PROTO) $(USE)
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

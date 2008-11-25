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

all: vertebra.pdf interim.pdf
	$(MAKE) clean_intermediate

%.pdf: %.dot
	dot -Tpdf -o $@ $<

%.pdf: %.twopi
	twopi -Tpdf -o $@ $<

%.pdf: %.neato
	neato -Tpdf -o $@ $<

preview: vertebra.pdf
	open vertebra.pdf

vertebra.pdf: $(CORE) $(COMPONENTS) $(FIGS) $(CONCEPTS) $(MATH) $(PROTO) $(USE)
	pdflatex vertebra.tex
	makeindex vertebra.idx -o vertebra.ind
	makeindex vertebra.tdx -o vertebra.tnd
	makeindex vertebra.nlo -s nomencl.ist -o vertebra.nls
	pdflatex vertebra.tex

interim.pdf: interim.tex ititle.tex $(FIGS) $(COMPONENTS) $(CONCEPTS) $(PROTO)
	pdflatex interim.tex
	makeindex interim.idx -o interim.ind
	makeindex interim.tdx -o interim.tnd
	makeindex interim.nlo -s nomencl.ist -o interim.nls
	pdflatex interim.tex

clean_intermediate:
	rm -f *.aux */*.aux */*/*.aux *.log *.ind *.toc *.ilg *.idx *.out *.nlo *.nls *.tnd *.tdx *.lot *.lof
	rm -f figs/dot/*.pdf

clean: clean_intermediate
	rm -f *.pdf

open: all
	open vertebra.pdf

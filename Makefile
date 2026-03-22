VERSION := $(shell cat VERSION)
MAJOR := $(word 1,$(subst ., ,$(VERSION)))
MINOR := $(word 2,$(subst ., ,$(VERSION)))
PATCH := $(word 3,$(subst ., ,$(VERSION)))

.PHONY: install dev build test deploy clean version version-major version-minor version-patch version-sync

install:
	npm install

dev:
	npm run dev

build:
	npm run build

test:
	npx vitest --run

deploy: build
	@echo "Deploy step — configure in CI"

clean:
	rm -rf dist node_modules

version:
	@cat VERSION

version-major:
	@echo "$$(( $(MAJOR) + 1 )).0.0" > VERSION
	@echo "Version bumped to $$(cat VERSION)"

version-minor:
	@echo "$(MAJOR).$$(( $(MINOR) + 1 )).0" > VERSION
	@echo "Version bumped to $$(cat VERSION)"

version-patch:
	@echo "$(MAJOR).$(MINOR).$$(( $(PATCH) + 1 ))" > VERSION
	@echo "Version bumped to $$(cat VERSION)"

version-sync:
	@sed -i '' 's/"version": ".*"/"version": "'$$(cat VERSION)'"/' package.json
	@echo "package.json synced to $$(cat VERSION)"

### Quick start

Useful Genx CLI params:

* `--subdir` specifies subdirectory to use when using repo containing multiple seeds
* `--ref v1.3.0` uses a specific blank app seed release (https://github.com/genesiscommunitysuccess/blank-app-seed/releases) (rather than latest)
* `--log-level verbose` enables debugging output
* `--no-shell` allows to chain commands together

https://learn.genesis.global/docs/operations/commands/genx-CLI/

#### Dev training seed

```
npx -y @genesislcap/genx@latest init app1 -x --ref v1.3.0 --no-shell && \
npx -y @genesislcap/genx@latest add app1 -s cistov/multiseed-test --subdir devtraining --no-shell && \
cd app1 && \
./gradlew assemble
```

#### Server training seed

```
npx -y @genesislcap/genx@latest init app2 -x --ref v1.3.0 --no-shell && \
npx -y @genesislcap/genx@latest add app2 -s cistov/multiseed-test --subdir servertraining --no-shell && \
cd app2 && \
./gradlew assemble
```

#### Web training seed

```
npx -y @genesislcap/genx@latest init app3 -x --ref v1.3.0 --no-shell && \
npx -y @genesislcap/genx@latest add app3 -s cistov/multiseed-test --subdir webtraining --no-shell && \
cd app3 && \
./gradlew assemble
```
